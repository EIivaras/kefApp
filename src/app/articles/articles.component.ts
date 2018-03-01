import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  routeToArticle(article) {
    this._router.navigateByUrl('/articles/' + article);
  }

}
