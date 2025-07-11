import { HttpInterceptorFn } from '@angular/common/http';
import { getFromLocalStorage } from '../utils/localStoreHelper';
import { environment } from '../../../environments/environment';
import * as CryptoJS from 'crypto-js';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const userData:any = getFromLocalStorage('userData');
  const encryptedToken = userData ? userData.accessToken : '';

  const excludedUrls = ['/auth/login', '/auth/forgot'];
  const shouldSkip = excludedUrls.some(url => req.url.includes(url));

  const bytes = CryptoJS.AES.decrypt(encryptedToken, environment.secretKey);
  const token = bytes.toString(CryptoJS.enc.Utf8);

  if (token && !shouldSkip) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }

  return next(req);
};
