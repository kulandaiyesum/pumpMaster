import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from 'src/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierOptions, NotifierModule } from 'angular-notifier';

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
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule,
    NotifierModule.withConfig(customNotifierOptions),
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
  ],
})
export class AuthModule {}
