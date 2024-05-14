import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserModePage } from './user-mode.page';

describe('UserModePage', () => {
  let component: UserModePage;
  let fixture: ComponentFixture<UserModePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
