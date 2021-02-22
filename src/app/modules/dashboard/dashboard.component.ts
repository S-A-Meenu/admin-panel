import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 18786 , name: 'Lucy'  , weight: 9876543210, symbol: 'lucy@email.in'},
//   {position: 2123  , name: 'Ravi'  , weight: 8754290767, symbol: 'ravi12@gmail.com'},
//   {position: 32233 , name: 'Kavi'  , weight: 6976543241, symbol: 'kavi6787@email.com'},
//   {position: 43445 , name: 'Rose'  , weight: 9023678122, symbol: 'rose8976@email.com'},
//   {position: 54455 , name: 'Jack'  , weight: 6789510811, symbol: 'jack123@gmail.in'},
//   {position: 62334 , name: 'Harry' , weight: 9213120107, symbol: 'aryy123@yahoo.com'},
//   {position: 72357 , name: 'Nickel', weight: 8765140067, symbol: 'nicke46@email.in'},
//   {position: 89087 , name: 'Sweety', weight: 6743159994, symbol: 'sweetpie@gmail.com'},
//   {position: 956789, name: 'Pinky' , weight: 8543218998, symbol: 'pinkybae@yahoo.com'},
//   {position: 100987, name: 'Paul'  , weight: 9999920179, symbol: 'paul678@email.in'},
//   {position: 118776, name: 'Raughl', weight: 8888222989, symbol: 'raugu@gmail.com'},
//   {position: 120986, name: 'Shree' , weight: 7532252430, symbol: 'shrreee@yahoo.com'},
//   {position: 138754, name: 'Sathya', weight: 9856426981, symbol: 'sath1789@hotmail.in'},
//   {position: 141097, name: 'Ram'   , weight: 6543228085, symbol: 'ram876@gmail.com'},
//   {position: 15876 , name: 'Seetha', weight: 9876430973, symbol: 'seetha198@email.com'},
//   {position: 16874 , name: 'Radha' , weight: 7543333206, symbol: 'radsee789@gmail.in'},
//   {position: 179876, name: 'Kishna', weight: 8707503545, symbol: 'kirsh1234@yahoo.com'},
//   {position: 180987, name: 'Jeni'  , weight: 7886543994, symbol: 'jeni@hotmail.com'},
//   {position: 190987, name: 'Lincy' , weight: 9887739098, symbol: 'lincyjeb109@email.in'},
//   {position: 200987, name: 'Arul'  , weight: 6445534007, symbol: 'arul123@gmail.com'},
// ];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // bigChart=[];
   cards=[];
  // pieChart=[];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  // @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  constructor( private dashboardService:DashboardService){}

  ngOnInit(){
    // this.bigChart=this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    // this.pieChart=this.dashboardService.pieChart();

    // this.dataSource.paginator=this.paginator;
  }

}
