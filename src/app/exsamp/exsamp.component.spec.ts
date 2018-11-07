import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExsampComponent } from './exsamp.component';

describe('ExsampComponent', () => {
  let component: ExsampComponent;
  let fixture: ComponentFixture<ExsampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExsampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExsampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
