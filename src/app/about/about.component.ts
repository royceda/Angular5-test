import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router'; // give access to route parameters
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	goals: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
  	this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
  	this._data.goal.subscribe(res => this.goals = res);
  }


  sendMeHome() {
  	this.router.navigate(['home']);
  }

}
