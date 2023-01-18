import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpMasterComponent } from './pump-master.component';

describe('PumpMasterComponent', () => {
  let component: PumpMasterComponent;
  let fixture: ComponentFixture<PumpMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PumpMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PumpMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
