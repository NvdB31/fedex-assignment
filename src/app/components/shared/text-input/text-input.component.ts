import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
})
export class TextInputComponent {
  @Input() value: string = '';
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() name!: string;
  @Input() placeholder: string = 'Enter a value';
  @Input() autocomplete: string = 'off';
  @Output() valueChange = new EventEmitter<string>();

  inputId: string = `input-${Math.random().toString(36).substring(2)}`;

  onInputChange() {
    this.valueChange.emit(this.value);
  }
}
