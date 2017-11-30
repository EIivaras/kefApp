import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kef-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rosterClick() {
    window.open(
      'https://docs.google.com/spreadsheets/d/1acwjVwtQGpiiMTQKceqRk8vmYSQY6WtWL778s741MWs/edit?usp=sharing',
      '_blank'
    );
  }

  combatClick() {
    window.open(
      'https://docs.google.com/document/d/1EJ7Y_VhvtorK9EKMKf2y5v8qAUoywd7uMWeogHjdgK4/edit',
      '_blank'
    );
  }

  summaryClick() {
    window.open(
      'https://docs.google.com/document/d/1HiDB05nDKABYEfbRQI8-KXGr9e5qMkV64OrHmlo29Yc/edit',
      '_blank'
    );
  }

  villainClick() {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSeJDDkQUITA_APxHPwOaNl_Hr5-8YODaRYl2rSN_b2pisb0pA/viewform',
      '_blank'
    );
  }

  addResourcesClick() {
    window.open(
      'https://drive.google.com/drive/folders/0B4OGFj1Iq3sqUWhMWTdHdExPRTA',
      '_blank'
    );
  }

}
