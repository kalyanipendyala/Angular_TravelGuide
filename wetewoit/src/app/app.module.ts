import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ToursComponent } from './tours/tours.component';
import { PerformanceComponent } from './performance/performance.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ToursComponent,
    PerformanceComponent,
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
        path:'performances',
        component:PerformanceComponent
      }
    ]

    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
