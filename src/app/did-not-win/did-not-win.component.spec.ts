import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DidNotWinComponent } from './did-not-win.component';

describe('DidNotWinComponent', () => {
  let component: DidNotWinComponent;
  let fixture: ComponentFixture<DidNotWinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DidNotWinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DidNotWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
