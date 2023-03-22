import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/contacts.interface';
import { ContactsService } from 'src/app/services/contacts.service';
import {NgForm} from '@angular/forms'


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contact: Contact = {id: 0, name: '', email: '', phone: ''};
  

  @ViewChild('myForm') form: NgForm;

  constructor(private contactService: ContactsService, private router: Router) {}

  addContact() {
    this.contactService.addContact(this.contact).subscribe((newContact: Contact) => {
      this.contact = newContact; 
      this.contactService.contactAdded.emit(this.contact); 
      
      this.contact = {id: 0, name: '', email: '', phone: ''};
      this.form.reset(); // reset the form
      
    });
  }
}
