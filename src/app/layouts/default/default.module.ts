import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { DashboardService } from 'src/app/modules/dashboard.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChartComponent } from 'src/app/modules/chart/chart.component';
import { EditTicketComponent } from 'src/app/modules/ticket/edit-ticket/edit-ticket.component';
import { ViewTicketComponent } from 'src/app/modules/ticket/view-ticket/view-ticket.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ViewTicketComponent,
    EditTicketComponent,
    ChartComponent
   ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    HighchartsChartModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers:[
    DashboardService
  ]
})
export class DefaultModule { }
