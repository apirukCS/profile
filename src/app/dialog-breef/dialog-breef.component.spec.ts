import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBreefComponent } from './dialog-breef.component';

describe('DialogBreefComponent', () => {
  let component: DialogBreefComponent;
  let fixture: ComponentFixture<DialogBreefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBreefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBreefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
