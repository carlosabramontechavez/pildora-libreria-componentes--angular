import { Directive, HostBinding, HostListener, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Directive({
  selector: '[expoReactiveForm]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ReactiveFormDirective),
      multi: true
    }
  ]
})
export class ReactiveFormDirective implements ControlValueAccessor {
  
  @HostBinding('disabled') public hostDisabled!: boolean;
  @HostBinding('value') public hostValue: any;

  onTouch = () => { };
  onChange = (_: string | number | unknown) => { };
  onBlur = (_: any) => { };
  onFocus = (_: any) => { };

  @HostListener('changeValue', ['$event'])
  public _handleInputEvent(value: unknown | string | number | string[] | number[] | boolean) {
    this.hostValue = value;
    this.onChange(value);
    this.onTouch();
  }

  public registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.hostDisabled = isDisabled;
  }

  public writeValue(value: unknown): void {
    this.hostValue = value ? value : '';
  }
}
