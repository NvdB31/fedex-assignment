import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password-validator',
  templateUrl: './password-validator.component.html'
})
export class PasswordValidatorComponent {
  @Input() password!: string;
  @Input() firstName!: string;
  @Input() lastName!: string;
  @Output() validateChange = new EventEmitter<boolean>();

  hasMinCharacters: boolean = false;
  hasLetterCasing: boolean = false;
  hasNoFirstOrLastName: boolean = true;

  ngOnChanges() {
    if (this.password) {
      this.hasMinCharacters = this.password.length >= 8;
      this.hasLetterCasing = /[a-z]/.test(this.password) && /[A-Z]/.test(this.password);
      this.hasNoFirstOrLastName = !this.password.toLowerCase().includes(this.firstName.toLowerCase()) && !this.password.toLowerCase().includes(this.lastName.toLowerCase());
    } else {
      this.hasMinCharacters = false;
      this.hasLetterCasing = false;
      this.hasNoFirstOrLastName = true;
    }
    console.log(this.hasMinCharacters, this.hasLetterCasing, this.hasNoFirstOrLastName)
    this.validateChange.emit(this.hasMinCharacters && this.hasLetterCasing && this.hasNoFirstOrLastName)
  }
}
