import { PartMasterComponent } from './components/part-master/part-master.component';
import { PumpMasterComponent } from './components/pump-master/pump-master.component';
import { MaterialGradeComponent } from './components/material-grade/material-grade.component';
import { MaterialUsageTypeComponent } from './components/material-usage-type/material-usage-type.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'material-uasage-type',component: MaterialUsageTypeComponent
  },
  {
    path: 'material-grade', component: MaterialGradeComponent
  },
  {
    path: 'pump-master', component: PumpMasterComponent
  },
  {
    path:'part-master', component:PartMasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
