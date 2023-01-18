import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUsageTypeComponent } from './material-usage-type.component';

describe('MaterialUsageTypeComponent', () => {
  let component: MaterialUsageTypeComponent;
  let fixture: ComponentFixture<MaterialUsageTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialUsageTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialUsageTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
