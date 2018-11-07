import {ComponentFixture, TestBed} from '@angular/core/testing';
import { CarComponent } from './car.component';
import {CarService} from './car.service';

describe('CarComponent', () =>{

  let fixture: ComponentFixture<CarComponent>;
  let component: CarComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent]
    });
     fixture = TestBed.createComponent(CarComponent);
     component = fixture.debugElement.componentInstance;
  });

  it('should create component instance ',  () => {
    expect(component).toBeTruthy();
  });

  it('should render h1 tag with header `My car header`',  () => {
      fixture.detectChanges();
      const nativeEl = fixture.debugElement.nativeElement;
      const text = nativeEl.querySelector('h1').textContent;
      expect(text).toEqual('My car header');
  });

  it('should inject CarService',  () => {
    const carService = fixture.debugElement.injector.get(CarService);
    fixture.detectChanges();
    expect(component.isCarVisible).toEqual(carService.getVisibilite());
  });

  it('should display car  if is visible', () => {
    const carService = fixture.debugElement.injector.get(CarService);
    carService.showcar();
    fixture.detectChanges();
    const nativeEl = fixture.debugElement.nativeElement;
    const text = nativeEl.querySelector('span').textContent;
    expect(text).toEqual('Car is visible');
  });
  it(`shouldn't display car  if isn't visible`, () => {
    const carService = fixture.debugElement.injector.get(CarService);
    carService.hideCar()
    fixture.detectChanges();
    const nativeEl = fixture.debugElement.nativeElement;
    const text = nativeEl.querySelector('span').textContent;
    expect(text).not.toEqual('Car is visible');
  });
});
