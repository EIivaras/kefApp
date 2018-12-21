import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideArcsComponent } from './side-arcs.component';

describe('SideArcsComponent', () => {
  let component: SideArcsComponent;
  let fixture: ComponentFixture<SideArcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideArcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideArcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
