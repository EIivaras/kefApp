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
      'https://docs.google.com/document/d/1kuFeJBG6Ijl8ovl782dkhvwZOJsp7A8KVYRuC_VPrlQ/edit?usp=sharing',
      '_blank'
    );
  }

  summaryClick() {
    window.open(
      'https://docs.google.com/document/d/1HiDB05nDKABYEfbRQI8-KXGr9e5qMkV64OrHmlo29Yc/edit?usp=sharing',
      '_blank'
    );
  }

  submissionClick() {
    window.open(
      'https://goo.gl/forms/V5tPIcmleOnWIOka2',
      '_blank'

    );
  }

  villainClick() {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSeJDDkQUITA_APxHPwOaNl_Hr5-8YODaRYl2rSN_b2pisb0pA/viewform',
      '_blank'
    );
  }

  writerClick() {
    window.open(
      'https://goo.gl/forms/cbHxJ1X0VGsIkUN12',
      '_blank'
    );
  }

  leaderAppClick() {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSeOfeFSalIqfzMZmHQo4T_9IklgoaJTGFZkOXJ-zVPU5R0GrA/viewform?usp=sf_link',
      '_blank'
    );
  }
}
