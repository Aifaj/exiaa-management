import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginNewPage } from './login-new.page';

describe('LoginNewPage', () => {
  let component: LoginNewPage;
  let fixture: ComponentFixture<LoginNewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
