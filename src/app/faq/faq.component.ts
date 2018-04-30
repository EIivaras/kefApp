import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kef-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  leadingAppClick () {
    window.open(
      'https://docs.google.com/forms/d/17O7JEjIKPquEjvb9GDmSI4r7htgrmjaKIG9ctX63t80/edit'
    );
  }

}
