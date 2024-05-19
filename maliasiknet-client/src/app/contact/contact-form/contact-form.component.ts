// contact/contact-form/contact-form.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactForm } from '../../models/contact-form.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  @Output() formSubmit: EventEmitter<ContactForm> = new EventEmitter<ContactForm>();
  contactForm: ContactForm = {
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  };

  submitForm() {
    this.formSubmit.emit(this.contactForm);
    // Formunuzu sıfırlamak istiyorsanız:
    // this.contactForm = { name: '', email: '', phoneNumber: '', subject: '', message: '' };
  }
}
