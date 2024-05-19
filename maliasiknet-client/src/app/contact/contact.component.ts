import { Component } from '@angular/core';
import { ContactForm } from '../models/contact-form.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  handleFormSubmit(formData: ContactForm) {
    // Form verilerini işleme alabilirsiniz.
    console.log('Form Gönderildi:', formData);
    // İstediğiniz işlemleri gerçekleştirin (örneğin, sunucuya gönderme).
  }
}