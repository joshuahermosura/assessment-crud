import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { MainContactComponent } from './main-contact/main-contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  {path: '', component: MainContactComponent, pathMatch: 'prefix'},
  {path: 'add', component: AddContactComponent},
  {path: 'view/:id', component: ViewContactComponent},
  {path: 'edit/:id', component: EditContactComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
