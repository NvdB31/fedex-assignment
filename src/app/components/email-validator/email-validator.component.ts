import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-email-validator',
  templateUrl: './email-validator.component.html',
})
export class EmailValidatorComponent {
  @Input() email!: string;
  @Output() validateChange = new EventEmitter<boolean>();

  isValidEmail: boolean = false;

  ngOnChanges() {
    // Email validation logic
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.isValidEmail = emailRegex.test(this.email);
    this.validateChange.emit(this.isValidEmail);
  }
}
