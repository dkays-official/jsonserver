import { Component, Input, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit{
  @Input() placeholder = '';
  @Input() type? : 'text' | 'password' | 'email';
  @Input() control: any;
  @Input() inputId = '';
  @Input() label = '';
  @Input() formGroup!: FormGroup
  
  ngOnInit(): void {
    this.formGroup.addControl(this.control , new FormControl(''))
  } 
}
