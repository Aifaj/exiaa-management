import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayOnlinePage } from './pay-online.page';

describe('PayOnlinePage', () => {
  let component: PayOnlinePage;
  let fixture: ComponentFixture<PayOnlinePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PayOnlinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
