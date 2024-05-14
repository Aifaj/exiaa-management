import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsProgramPage } from './events-program.page';

describe('EventsProgramPage', () => {
  let component: EventsProgramPage;
  let fixture: ComponentFixture<EventsProgramPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EventsProgramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
