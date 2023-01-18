import { PumpMasterComponent } from './components/pump-master/pump-master.component';
import { PartMasterComponent } from './components/part-master/part-master.component';
import { MaterialUsageTypeComponent } from './components/material-usage-type/material-usage-type.component';
import { MaterialGradeComponent } from './components/material-grade/material-grade.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MaterialModule } from 'src/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierOptions, NotifierModule } from 'angular-notifier';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';


const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'middle',
      distance: 12,
    },
    vertical: {
      position: 'top',
      distance: 99,
      gap: 15,
    },
  },
  theme: 'material',
  behaviour: {
    autoHide: 1200,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4,
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 800,
      easing: 'ease',
    },
    hide: {
      preset: 'fade',
      speed: 1000,
      easing: 'ease',
      offset: 150,
    },
    shift: {
      speed: 500,
      easing: 'ease',
    },
    overlap: 90,
  },
};

@NgModule({
  declarations: [
    MaterialGradeComponent,
    MaterialUsageTypeComponent,
    PartMasterComponent,
    PumpMasterComponent,
    DeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NotifierModule,
    NotifierModule.withConfig(customNotifierOptions),
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
  ],
})
export class MasterModule {}
