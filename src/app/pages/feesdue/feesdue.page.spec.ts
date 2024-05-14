import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeesduePage } from './feesdue.page';

describe('FeesduePage', () => {
  let component: FeesduePage;
  let fixture: ComponentFixture<FeesduePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FeesduePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
