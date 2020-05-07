import { Component, OnInit } from '@angular/core';
import { ContactService } from "../contact.service";
import { Contact } from "../contact";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[ContactService]
})

export class ContactsComponent implements OnInit {
  contacts : Array<Contact> = [];
  contact : string;
  first_name : string;
  last_name : string;
  phone : string;
  
  constructor(private contactService : ContactService) { }
  
addContact(){
  const newContact = {
    first_name : this.first_name,
    last_name : this.last_name,
    phone : this.phone
  }
  this.contactService.addContact(newContact)
  .subscribe((data:any )=> {
    this.contacts.push(data)
    this.contactService.getContacts()
    .subscribe((contacts)=> 
      this.contacts = contacts
    )
  })
}


  deleteContact(id){
   
    this.contactService.deleteContact(id);
    this.contacts.splice(this.contacts.indexOf(id), 1);
  }
  
  
  ngOnInit(): void {
    
    this.contactService.getContacts()
        .subscribe((contacts)=> 
          this.contacts = contacts
        )
    }
}
