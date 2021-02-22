import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe :EventEmitter<any> = new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  signout() {
    this.router.navigateByUrl('login');
  }

  toggleSideBar(){
  this.toggleSideBarForMe.emit();
  setTimeout(()=>{
    window.dispatchEvent(
      new Event('resize')
    );
  },300);
  }

}