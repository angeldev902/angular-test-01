// custom-input.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CustomInputComponent } from './custom-input.component';
import { By } from '@angular/platform-browser';

describe('CustomInputComponent', () => {
  let component: CustomInputComponent;
  let fixture: ComponentFixture<CustomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomInputComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomInputComponent);
    component = fixture.componentInstance;

    // Configura valores necesarios
    component.label = 'Email';
    component.type = 'email';
    component.id = 'email';
    component.placeholder = 'Enter your email';
    component.errorMessage = 'Email is required';
    component.control = new FormControl('');

    fixture.detectChanges(); // Aplica el binding del template
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the input label', () => {
    const labelElement = fixture.debugElement.query(By.css('label')).nativeElement;
    expect(labelElement.textContent).toContain('Email');
  });

  it('should show error message when control is invalid and touched', () => {
    component.control.markAsTouched(); // Marca como tocado
    component.control.setErrors({ required: true }); // Simula error
    fixture.detectChanges();

    const errorElement = fixture.debugElement.query(By.css('.text-danger')).nativeElement;
    expect(errorElement.textContent).toContain('Email is required');
  });
});
