import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AskDoubtPage } from './ask-doubt.page';

describe('AskDoubtPage', () => {
  let component: AskDoubtPage;
  let fixture: ComponentFixture<AskDoubtPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AskDoubtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
