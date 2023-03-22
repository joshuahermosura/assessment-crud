import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/contacts.interface';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  contacts: Contact[]=[];

  constructor(private contactService: ContactsService, private router: Router){}

  ngOnInit() : void {
    
    this.getAllContacts();
    
    this.contactService.contactAdded.subscribe((contact: Contact) => {
      this.contacts.push(contact);
      console.log(contact)
    });
    
  }

  getAllContacts() {
    this.contactService.getContacts().subscribe(
      (res : Contact[]) => {
        this.contacts = res;
      }
    )
  }

  onDeleteContact(id:number) {
    this.contactService.deleteContact(id).subscribe(
      (res: Contact) => {
        this.contacts = this.contacts.filter(contact => contact.id !== id)
      }
    )
  }

  onViewContact(id:number) {
    this.contactService.getContact(id).subscribe(
      (res: Contact) => {
        this.router.navigate([`/view/`, id])
      }
    )
  }

  onEditContact(id:number) {
    this.contactService.getContact(id).subscribe(
      (res: Contact) => {
        this.router.navigate([`/edit/`, id])
      }
    )
  }

  

  


  
}
