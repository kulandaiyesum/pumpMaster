import { PartMasterService } from './../../service/part-master.service';
import { PartMaster } from './../../model/part-master';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialUsageTypeService } from '../../service/material-usage-type.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NotifierService } from 'angular-notifier';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-part-master',
  templateUrl: './part-master.component.html',
  styleUrls: ['./part-master.component.scss'],
})
export class PartMasterComponent implements OnInit {
  isLoggedIn = '2';
  public partMaster!: PartMaster;
  public notifier!: NotifierService;
  form!: FormGroup;
  dVal: any;
  displayedColumn: string[] = [
    'partName',
    'partShortName',
    'partNo',
    'usageType',
    'status',
    'action',
  ];
  dataSource: any;
  value = '';
  constructor(
    private mutService: MaterialUsageTypeService,
    private partMasterService: PartMasterService,
    notifier: NotifierService,
    public dialog: MatDialog
  ) {
    this.notifier = notifier;
  }

  ngOnInit(): void {
    this.partMaster = new PartMaster();
    this.createForm();
    this.dropdwonGet();
    this.partGetFn();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  createForm() {
    this.form = new FormGroup({
      partName: new FormControl('', [Validators.required]),
      partShortName: new FormControl('', [Validators.required]),
      partNo: new FormControl('', [Validators.required]),
      usageType: new FormControl('', [Validators.required]),
    });
  }
  public myError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
  dropdwonGet() {
    this.mutService.mutGetService().subscribe((data) => {
      console.log(data);
      this.dVal = data;
    });
  }

  openDialog(val: any) {
    let dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'true') {
        this.partDeleteFn(val);
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
  partSaveFn() {
    this.partMasterService
      .partSaveService(this.partMaster)
      .subscribe((data) => {
        console.log(data, 'working');
        alert('Saved succuessfully');
        // this.notifier.notify('succuess', 'Saved succuessfully');
        this.partGetFn();
        this.clear();
      });
  }
  partGetFn() {
    this.partMasterService.partGetService().subscribe((val: any) => {
      console.log(val, 'values');
      this.dataSource = new MatTableDataSource(val);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  partDeleteFn(id: any) {
    this.partMasterService.partDeleteService(id).subscribe((dd) => {
      console.log(dd, 'deleted data');
      this.partGetFn();
    });
  }
  clear() {
    // this.partMaster = new PartMaster()
    // this.form.reset()
    this.partMaster.partName = '';
    this.partMaster.partNo = '';
    this.partMaster.partShortName = '';
    this.partMaster.usageType = '';
  }
  partEditFn(row:any){
    this.partMaster.id = row.id;
    this.partMaster.partName = row.partName;
    this.partMaster.partNo = row.partNo;
    this.partMaster.partShortName = row.partShortName;
    this.partMaster.usageType = row.usageType;
  }

  partUpdateFn() {
    this.partMasterService.partUpdateService(this.partMaster).subscribe((data: any) => {
      console.log(data, 'updated value');
      this.partGetFn();
      this.clear();
    })
  }
}
