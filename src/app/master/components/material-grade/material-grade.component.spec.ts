import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialGradeComponent } from './material-grade.component';

describe('MaterialGradeComponent', () => {
  let component: MaterialGradeComponent;
  let fixture: ComponentFixture<MaterialGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
