import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'expo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() label = 'Botón'
  @Input() theme: 'success' | 'error' | 'warning' | 'info' = 'success'
  @Input() size: 's' | 'm' = 'm'

  @Input() width?: string;
  @Input() disabled?: boolean;

  @Output() changeButton = new EventEmitter<void>()

  handlerChangeButton() {
    this.changeButton.emit()
  }

  get __class() {
    return {
      [`btn-theme-${this.theme}`]: true,
      [`btn-height-${this.size}`]: true,
      [`btn-font-size-${this.size}`]: true,
    }
  }

  get styles() {
    return {
      width: this.width ? this.width : 'max-content',
      cursor: this.disabled ? 'auto' : 'pointer',
      opacity: this.disabled ? '0.5' : '1',
    }
  }
}
