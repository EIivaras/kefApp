import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KefAffairsComponent } from './kef-affairs.component';

describe('KefAffairsComponent', () => {
  let component: KefAffairsComponent;
  let fixture: ComponentFixture<KefAffairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KefAffairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KefAffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
