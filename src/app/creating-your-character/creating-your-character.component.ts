import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creating-your-character',
  templateUrl: './creating-your-character.component.html',
  styleUrls: ['./creating-your-character.component.css']
})
export class CreatingYourCharacterComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  backToRoot() {
    this._router.navigateByUrl('/articles');
  }
}
