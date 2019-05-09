import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  constructor(private http:HttpClient) { }

   listofUrls:String[];
   

  getData(){
    this.listofUrls = ['ab'];
    console.log("inside getData");
    var dataurl = './assets/data/api/url_list.json';
    return this.http.get(dataurl)
          .subscribe(result => {
          var d = JSON.stringify(result);
          console.log(JSON.parse(d).key);
           this.listofUrls.push(JSON.parse(d).key);
          });
  }

  ngOnInit() {
  }

}
