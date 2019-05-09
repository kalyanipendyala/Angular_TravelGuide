import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { reject } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  values: string[];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  export(){

    var promise = new Promise(function(resolve,reject){
       if(true){
         reject(1);
       }else{
         resolve(10);
       }
    });
     promise.then(v => document.body.innerHTML += v + '<br>',a =>document.body.innerHTML += a + '<br>' );
    console.log('export ');
    /* Observable.create(observer => {
      const eventSource = new EventSource('http://localhost:8080/test');
      eventSource.onmessage = x => observer.next(x.data);
      eventSource.onerror = x => observer.error(console.log('EventSource failed'));

      return () => {
          eventSource.close();
      };
  }).subscribe(v =>  document.body.innerHTML += v + '<br>'); */
  }

  
  getValues(){
    console.log('values ');
    this.httpClient.get('http://localhost:8080/values')
                    .subscribe((v: any) => {this.values = v;})
  }

}
