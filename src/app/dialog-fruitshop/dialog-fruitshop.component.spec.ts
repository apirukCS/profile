import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogFruitshopComponent } from './dialog-fruitshop.component';

describe('DialogFruitshopComponent', () => {
  let component: DialogFruitshopComponent;
  let fixture: ComponentFixture<DialogFruitshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFruitshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogFruitshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
