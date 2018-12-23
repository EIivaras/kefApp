import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kef-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css']
})
export class GettingStartedComponent implements OnInit {

  constructor( private _router: Router ) { }

  ngOnInit() {
  }

  rulesClick() {
    this._router.navigateByUrl('/rules');
  }

  faqClick() {
    this._router.navigateByUrl('/faq');
  }

  resourcesClick() {
    this._router.navigateByUrl('/resources');
  }

  articlesClick() {
    this._router.navigateByUrl('/articles');
  }

  eventsClick() {
    this._router.navigateByUrl('/upcoming-events');
  }
}
