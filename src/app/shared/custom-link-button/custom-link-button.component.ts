import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-link-button',
  imports: [CommonModule],
  templateUrl: './custom-link-button.component.html',
  styleUrl: './custom-link-button.component.css',
  standalone: true
})
export class CustomLinkButtonComponent {
  @Input() className: string = 'btn';
  @Input() name: string = '';
  @Input() routerLink!: string;
  @Input() disabled: boolean = false;
}
