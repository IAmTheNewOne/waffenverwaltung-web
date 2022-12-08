import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeheimComponent } from './geheim.component';

describe('GeheimComponent', () => {
  let component: GeheimComponent;
  let fixture: ComponentFixture<GeheimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeheimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeheimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
