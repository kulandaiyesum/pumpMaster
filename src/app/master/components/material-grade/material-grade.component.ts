import { DeleteDialogComponent } from './../delete-dialog/delete-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialUsageTypeService } from '../../service/material-usage-type.service';
import { MaterialGradeService } from '../../service/material-grade.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialGrade } from '../../model/material-grade';
import { NotifierOptions, NotifierService } from 'angular-notifier';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-material-grade',
  templateUrl: './material-grade.component.html',
  styleUrls: ['./material-grade.component.scss'],
})
export class MaterialGradeComponent implements OnInit {
  public materialGrade!: MaterialGrade;
  public dataSource: any;
  dVal = null as any;
  public notifier: NotifierService;
  value = '';

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  displayedColumn: string[] = [
    'gradeName',
    'gradeCode',
    'usageType',
    'materialId',
    'status',
    'action',
  ];
  form!: FormGroup;
  isLoggedIn = '2';

  constructor(
    private mutService: MaterialUsageTypeService,
    private materialGradeService: MaterialGradeService,
    notifier: NotifierService,
    public dialog: MatDialog
  ) {
    this.notifier = notifier;
  }

  ngOnInit(): void {
    this.materialGrade = new MaterialGrade();
    this.dropdwonGet();
    this.materialGradeGetFn();
    this.createForm();
  }
  createForm() {
    this.form = new FormGroup({
      gradeName: new FormControl('', [Validators.required]),
      gradeCode: new FormControl('', [Validators.required]),
      usageType: new FormControl('', [Validators.required]),
      materialId: new FormControl('', [Validators.required]),
    });
  }
  public myError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };

  openDialog(val: any) {
    let dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'true') {
        this.materialGradeDeleteFn(val);
      } else {
        console.log('closed');
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  dropdwonGet() {
    this.mutService.mutGetService().subscribe((data) => {
      console.log(data);
      this.dVal = data;
    });
  }

  materialGradeSaveFn() {
    this.materialGradeService
      .materialGradePostService(this.materialGrade)
      .subscribe((data) => {
        console.log(data, 'aaaaaaa');
        this.notifier.notify('succuess', 'Saved succuessfully');
        this.materialGradeGetFn();
        this.clear();
      });
  }

  materialGradeGetFn() {
    this.materialGradeService
      .materialGradeGetService()
      .subscribe((val: any) => {
        console.log(val, 'this is dat');
        this.dataSource = new MatTableDataSource(val);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  materialGradeDeleteFn(id: any) {
    this.materialGradeService
      .materialGradeDeleteService(id)
      .subscribe((data) => {
        console.log(data, 'deleted data');
        this.materialGradeGetFn();
      });
  }
  clear() {
    this.materialGrade.gradeCode = 0;
    this.materialGrade.gradeName = '';
    this.materialGrade.materialId = '';
    this.materialGrade.usageType = '';
  }

  materialGradeEditFn(row: any) {
    this.materialGrade.id = row.id;
    this.materialGrade.gradeCode = row.gradeCode;
    this.materialGrade.gradeName = row.gradeName;
    this.materialGrade.materialId = row.materialId;
    this.materialGrade.usageType = row.usageType;
  }
  materialGradeUpdateFn() {
    this.materialGradeService
      .materialGradeUpdateService(this.materialGrade)
      .subscribe((data: any) => {
        console.log(data, 'updated value');
        this.materialGradeGetFn();
        this.clear();
      });
  }
}
