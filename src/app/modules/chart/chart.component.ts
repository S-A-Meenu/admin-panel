import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  bigChart=[];
  pieChart=[];

  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {

    this. bigChart=this.dashboardService.bigChart();
    this.pieChart=this.dashboardService.pieChart();
  }

}
