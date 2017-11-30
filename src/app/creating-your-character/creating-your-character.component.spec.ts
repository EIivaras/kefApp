import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingYourCharacterComponent } from './creating-your-character.component';

describe('CreatingYourCharacterComponent', () => {
  let component: CreatingYourCharacterComponent;
  let fixture: ComponentFixture<CreatingYourCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingYourCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingYourCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
