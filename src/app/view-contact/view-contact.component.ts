import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/contacts.interface';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent {
  contact: Contact = { name: '', email: '', phone: '' , id: 0};
  
   constructor(private route: ActivatedRoute, private contactsService: ContactsService) {}

  ngOnInit() {
    this.contact.id = this.route.snapshot.paramMap.get('id')
    this.contactsService.getContact(this.contact.id).subscribe(
      (res: any) => {
        this.contact  = { name: res.name , email: res.email, phone: res.phone , id: res.id};
      }
    )
  }
  
  
}
