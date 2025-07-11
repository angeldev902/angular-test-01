import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Login, User } from '../models/user.model';
import * as CryptoJS from 'crypto-js';
import { saveToLocalStorage } from '../utils/localStoreHelper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private httpClient: HttpClient) { }

// Un Observable es como una fuente de datos asincrónica (como un stream)
login(credentials: Login): Observable<User> {
  return this.httpClient.post<User>(`${environment.apiBaseUrl}/api/users/auth/login/`, credentials)
  .pipe(// permite encadenar operadores de RxJS (como un .chain()).
    tap((res: User) => { // es un operador side effect, útil para logear, guardar cosas, etc
      if (res) {
        const encryptedToken = CryptoJS.AES.encrypt(res.accessToken, environment.secretKey).toString();
        saveToLocalStorage('userData', {
          ...res,
          accessToken: encryptedToken
        });
      }
    })
  );
};

}
