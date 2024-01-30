import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
   isVisible = true;
   btnText = 'Hide';

  title = 'my angular app';
  users = [
    {id:1,name:'user1',role:'user', isActive: true},
    {id:2,name:'user2',role:'admin', isActive: false},
    {id:3,name:'user3',role:'user', isActive: true},
    {id:4,name:'user4',role:'admin', isActive: true},
  ]

  ngOnInit() {
    this.btnText = this.isVisible ? 'Hide' : 'Show';
  }

  toggleVisible () {
    this.isVisible = !this.isVisible;
    this.btnText = this.isVisible ? 'Hide' : 'Show';
  }
}
