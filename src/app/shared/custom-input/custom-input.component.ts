import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css',
  standalone: true
})
export class CustomInputComponent {
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() id:string = '';
  @Input() control!: FormControl;
  @Input() placeholder: string = '';
  @Input() errorMessage: string = '';
}
