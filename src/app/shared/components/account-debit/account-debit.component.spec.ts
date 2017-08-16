import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDebitComponent } from './account-debit.component';

describe('AccountDebitComponent', () => {
  let component: AccountDebitComponent;
  let fixture: ComponentFixture<AccountDebitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDebitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
