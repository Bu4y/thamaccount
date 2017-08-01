import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RvComponent } from './rv.component';

describe('RvComponent', () => {
  let component: RvComponent;
  let fixture: ComponentFixture<RvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
