import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRiseComponent } from './dialog-rise.component';

describe('DialogRiseComponent', () => {
  let component: DialogRiseComponent;
  let fixture: ComponentFixture<DialogRiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogRiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
