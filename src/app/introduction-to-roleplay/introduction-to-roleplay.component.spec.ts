import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionToRoleplayComponent } from './introduction-to-roleplay.component';

describe('IntroductionToRoleplayComponent', () => {
  let component: IntroductionToRoleplayComponent;
  let fixture: ComponentFixture<IntroductionToRoleplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionToRoleplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionToRoleplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
