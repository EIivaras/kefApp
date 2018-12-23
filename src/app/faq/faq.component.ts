import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kef-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  leadingAppClick () {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSeOfeFSalIqfzMZmHQo4T_9IklgoaJTGFZkOXJ-zVPU5R0GrA/viewform?usp=sf_link',
      '_blank'
    );
  }

  routeToSideArc () {
    this._router.navigateByUrl('/side-arcs');
  }

}
