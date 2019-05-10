import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  constructor(private http: HttpClient) { }

  listofUrls: String[];
  local: any;

  getData() {
    this.listofUrls = ['ab'];
    console.log("inside getData");
    var dataurl = './assets/data/api/url_list.json';
    return this.http.get(dataurl)
      .subscribe(result => {
        var d = JSON.stringify(result);
        this.local = JSON.parse(d).values;
        JSON.parse(d).values.forEach(element => {
          this.listofUrls.push(element.key);
        });
      });
  }

  ngOnInit() {
    console.log("init");
    this.getData();
  }

}

export interface showDetails{
  date:String;
  path:String;
}
