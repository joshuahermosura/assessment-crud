import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/contacts.interface';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {
  contact: Contact = {id: 0, name: '', email: '', phone: ''};
  
   constructor(private route: ActivatedRoute, private contactsService: ContactsService, private router: Router) {}

  ngOnInit() {
    this.contact.id = this.route.snapshot.paramMap.get('id')
    this.contactsService.getContact(this.contact.id).subscribe(
      (res: any) => {
        this.contact  = { name: res.name , email: res.email, phone: res.phone , id: res.id};
      }
    )
  }
  @ViewChild('myForm') form: NgForm;
  addContact(event$: Event){
    this.contactsService.updateContact(this.contact).subscribe(() => {
      
      this.router.navigate(['']);
    });
  }
}
