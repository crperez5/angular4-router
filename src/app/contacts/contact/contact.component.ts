import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {Http} from "@angular/http";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/startWith";
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact$;

  constructor(private route:ActivatedRoute, private http:Http){
         const api = 'https://starwars-json-server-ewtdxbyfdz.now.sh/';
         this.contact$ = new BehaviorSubject({name: '', image: ''})
         route.params
             .map((p:any) => p.id)
             .switchMap(id => http.get(api + 'people/' + id)
                 .map(res => res.json())
                 .map(contact =>  Object.assign({}, contact, {image: api + contact.image}))
             ).subscribe(this.contact$)
            
             
            ;
     }



}
