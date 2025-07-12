import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'contact-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss'
})
export class ContactDetails {
  id: string = '';
  constructor(
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
}
