import { MaterialUsageTypeService } from './../../service/material-usage-type.service';
import { MaterialUsageType } from './../../model/material-usage-type';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-material-usage-type',
  templateUrl: './material-usage-type.component.html',
  styleUrls: ['./material-usage-type.component.scss'],
})
export class MaterialUsageTypeComponent implements OnInit {
  // Note :
  // Material-usage-type == mut

  constructor(private mutService: MaterialUsageTypeService) {}

  public mut!: MaterialUsageType;

  ngOnInit(): void {
    this.mut = new MaterialUsageType();
    this.mutGet();
  }

  displayedColumns: string[] = ['matUseType', 'status'];

  public dataSource: any;
  value = '';
  // public notifier: NotifierService;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  mutReset(){
    this.mut.matUseType = "";
  }

  mutSave() {
    this.mutService.mutPostService(this.mut).subscribe((data) => {
      console.log(data, 'sent');
      this.mutGet();
    });
  }

  mutGet() {
    this.mutService.mutGetService().subscribe((dat: any) => {
      console.log(dat, 'data get for material usage type');

      this.dataSource = new MatTableDataSource(dat);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
