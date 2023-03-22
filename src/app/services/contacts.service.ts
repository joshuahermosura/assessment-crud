import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Contact } from '../contacts.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

    private apiUrl = 'http://localhost:3000/contacts';
  // private apiUrl = 'https://jsonplaceholder.typicode.com/users'
  

  constructor(private http: HttpClient) { }
  contactAdded = new EventEmitter<Contact>();
  
  // Get all contacts
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiUrl}`);
  }

  // Get a contact by id
  getContact(id: number): Observable<Contact> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Contact>(url);
  }

  // Add a new contact
  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact);
  }

  // Update an existing contact
  updateContact(contact: Contact): Observable<Contact> {
    const url = `${this.apiUrl}/${contact.id}`;
    return this.http.put<Contact>(url, contact);
  }

  // Delete a contact
  deleteContact(id: number): Observable<Contact> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Contact>(url);
  }

}
