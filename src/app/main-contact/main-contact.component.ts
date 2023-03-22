import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contacts.interface';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-main-contact',
  templateUrl: './main-contact.component.html',
  styleUrls: ['./main-contact.component.css']
})
export class MainContactComponent {
  contact: Contact = {id: 0, name: '', email: '', phone: ''};
  
}
