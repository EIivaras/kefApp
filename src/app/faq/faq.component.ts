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
      'https://docs.google.com/forms/d/17O7JEjIKPquEjvb9GDmSI4r7htgrmjaKIG9ctX63t80/edit'
    );
  }

  routeToSideArc () {
    this._router.navigateByUrl('/side-arcs');
  }

}
