import { PumpMasterService } from './../../service/pump-master.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { NotifierService } from 'angular-notifier';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PumpMaster } from '../../model/pump-master';

@Component({
  selector: 'app-pump-master',
  templateUrl: './pump-master.component.html',
  styleUrls: ['./pump-master.component.scss'],
})
export class PumpMasterComponent implements OnInit {
  public pumpMaster!: PumpMaster;
  public notifier!: NotifierService;
  isLoggedIn = '2';
  value = '';
  dataSource: any;
  public form!: FormGroup;
  displayedColumn: string[] = [
    'model',
    'type',
    'category',
    'shortName',
    'status',
    'action',
  ];

  constructor(
    public dialog: MatDialog,
    private pumpMasterService: PumpMasterService,
    notifier: NotifierService
  ) {
    this.notifier = notifier;
  }

  ngOnInit(): void {
    this.pumpMaster = new PumpMaster();
    this.createForm();
    this.pumpMasterGetFn();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  createForm() {
    this.form = new FormGroup({
      model: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      shortName: new FormControl('', [Validators.required]),
      shortNameId: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      categoryId: new FormControl('', [Validators.required]),
    });
  }
  public myError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };

  openDialog(val: any) {
    let dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'true') {
        this.pumpMasterDeleteFn(val);
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
  pumpMasterSaveFn() {
    this.pumpMasterService
      .pumpMasterSaveService(this.pumpMaster)
      .subscribe((data) => {
        console.log(data, 'working');
        alert('Saved succuessfully');
        this.notifier.notify('succuess', 'Saved succuessfully');
        this.pumpMasterGetFn();
        this.clear();
      });
  }

  pumpMasterGetFn() {
    this.pumpMasterService.pumpMasterGetService().subscribe((val: any) => {
      console.log(val, 'values');
      this.dataSource = new MatTableDataSource(val);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  pumpMasterDeleteFn(id: any) {
    this.pumpMasterService.pumpMasterDeleteService(id).subscribe((dd) => {
      console.log(dd, 'deleted data');
      this.pumpMasterGetFn();
    });
  }
  clear() {
    this.pumpMaster.category = '';
    this.pumpMaster.categoryId = '';
    this.pumpMaster.model = '';
    this.pumpMaster.shortName = '';
    this.pumpMaster.shortNameId = '';
    this.pumpMaster.type = '';
  }

  pumpMasterEditFn(row: any) {
    this.pumpMaster.id = row.id;
    this.pumpMaster.category = row.category;
    this.pumpMaster.categoryId = row.categoryId;
    this.pumpMaster.model = row.model;
    this.pumpMaster.shortName = row.shortName;
    this.pumpMaster.shortNameId = row.shortNameId;
    this.pumpMaster.type = row.type;
  }

  pumpMasterUpdateFn() {
    this.pumpMasterService
      .pumpMasterUpdateService(this.pumpMaster)
      .subscribe((data: any) => {
        console.log(data, 'updated value');
        this.pumpMasterGetFn();
        this.clear();
      });
  }
}
