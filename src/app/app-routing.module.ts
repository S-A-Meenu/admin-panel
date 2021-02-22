import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ViewTicketComponent } from './modules/ticket/view-ticket/view-ticket.component';
import { EditTicketComponent } from './modules/ticket/edit-ticket/edit-ticket.component';
import { ChartComponent } from './modules/chart/chart.component';

const routes: Routes = [
  {
    path:'',
    component:DefaultComponent,
    children:[{
      path:'',
      component:DashboardComponent,
    },
    { path:'view',
    component:ViewTicketComponent,
  },
  {
    path:'edit',
    component:EditTicketComponent,
  },
  {
    path:'chart',
    component:ChartComponent,
  }
]
},
{ path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
