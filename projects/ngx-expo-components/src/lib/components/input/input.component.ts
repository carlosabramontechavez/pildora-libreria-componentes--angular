import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'expo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() type: 'text' | 'number' | 'password' = 'text'

  @Input() value!: string;
  @Input() placeholder: string = 'Placeholder';

  @Output() changeValue = new EventEmitter<string>()

  @Input() readOnly?: boolean;
  @Input() disabled?: boolean;

  @Input() error?: boolean;

  @Input() width?: string;

  @Input() size: 's' | 'm' = 'm'

  focus = false


  onInput(event: Event): void {
    const inputEvent = event.target as HTMLInputElement;
    this.value = inputEvent.value;
    this.changeValue.emit(this.value);
  }


  get styles() {
    const color = this.error ? '#f5222d' : '#8c8c8c'
    return {
      width: this.width ? this.width : '100%',
      border: `2px solid ${color}`,
      color: color,
      opacity: this.disabled ? '0.5' : '1',
    }
  }


  get __class() {
    return {
      [`input-height-${this.size}`]: true,
      [`input-font-size-${this.size}`]: true,
      [`input-check-focus`]: this.focus
    }
  }

}
