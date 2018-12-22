import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kef-affairs',
  templateUrl: './kef-affairs.component.html',
  styleUrls: ['./kef-affairs.component.css']
})
export class KefAffairsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  guildHallOverviewClick () {
    window.open(
      'https://docs.google.com/document/d/1WA4TMGeIHF07Cx1ZYwVN9QS-FmVQvilUEO6kWpiVg-4/edit?usp=sharing'
    );
  }

  kefCharterClick () {
    window.open(
      'https://docs.google.com/document/d/1mFnXX3pbA2bDTL_WbTcP0bMy5PwPPPTsjRdnLvEisE0/edit?usp=sharing'
    );
  }

  memberAgreementClick () {
    window.open(
      'https://docs.google.com/document/d/1eFYnNCBicgVS9puya8Vo7MvpF2mZnsVNxJFb4lviSm0/edit?usp=sharing'
    );
  }

  disciplinePolicyClick () {
    window.open(
      'https://docs.google.com/document/d/13JlZxH3qrC4kpctaTYrhwsG5nMBWoPIcRcKK8SIKX30/edit?usp=sharing'
    );
  }

  officersAndTeamsClick () {
    window.open(
      'https://docs.google.com/document/d/1xpAj5GiOLXfzpMAR6UZpv2-Yv-VHTVTM_yFEd0pqva8/edit?usp=sharing'
    );
  }

  golemsClick () {
    window.open(
      'https://docs.google.com/document/d/1q-DxZiUi3gv7GPtEcHWbSCd3A6KnOs93poADyCc3qtw/edit?usp=sharing'
    );
  }

}
