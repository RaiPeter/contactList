import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Contact } from "./contact";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  constructor(private http : HttpClient) { }
  
  //retrieing contacts
  
  getContacts():Observable<Contact>{
    return this.http.get<Contact>('http://localhost:3000/api/contacts');
    
  }
  
  //adding a contact
  addContact(newContact){
    var headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/contact',newContact,{headers : headers});
  }
  
  //delete a contact
deleteContact(id){
  return this.http.delete('https://ocalhost:3000/api/contact/'+id);
}

}