import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm!: FormGroup //when we use ! instead ?  (contactForm!) we are sure this never will be null

  constructor(private formBuilder: FormBuilder){
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  send(event: Event){
    event?.preventDefault()
    console.log(this.contactForm.value)
  }

  hasErrors(input: string, validate: string){
    return this.contactForm.get(input)?.hasError(validate) && this.contactForm.get(input)?.touched
  }
}
