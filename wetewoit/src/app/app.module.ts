import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PerformanceComponent } from './performance/performance.component';
import { AddPerformaceComponent } from './add-performace/add-performace.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PerformanceComponent,
    AddPerformaceComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
         path:'about',
         component:AboutComponent
      },
      {
        path:'performances/add',
        component:AddPerformaceComponent
      },
      {
        path:'performances/show',
        component:PerformanceComponent
      }
    ]

    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
