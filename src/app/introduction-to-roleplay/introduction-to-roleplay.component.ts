import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction-to-roleplay',
  templateUrl: './introduction-to-roleplay.component.html',
  styleUrls: ['./introduction-to-roleplay.component.css']
})
export class IntroductionToRoleplayComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  backToRoot() {
    this._router.navigateByUrl('/articles');
  }

}
