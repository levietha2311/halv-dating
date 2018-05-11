import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashBoardRoutingModule } from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    DashBoardRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
