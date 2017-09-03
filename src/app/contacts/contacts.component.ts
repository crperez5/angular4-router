import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
contacts$;
  constructor(private http:Http){
      this.contacts$ = http.get('https://starwars-json-server-ewtdxbyfdz.now.sh/people')
          .map(res => res.json());
  }

  ngOnInit() {
  }

}
