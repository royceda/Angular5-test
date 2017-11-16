import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { HttpClient } from '@angular/common/http';

@Injectable()

export class DataService {

	private goals = new BehaviorSubject<any>(['init one', 'another one']);
	goal = this.goals.asObservable();
	private results: any;
	endpoints: string = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'


  constructor( private http: HttpClient ) { }

  changeGoal(goal){
  	this.goals.next(goal);
  }


  getProduct(){
  	// Make the HTTP request:
    this.http.get(this.endpoints).subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
    });
  }


}
