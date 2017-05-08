import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


//my components
import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            
            { path: '', component: WelcomeComponent }
        ]),

    ],
    declarations: [
      AppComponent,
        WelcomeComponent
        ],

   
    bootstrap: [ AppComponent ]
})
export class AppModule { }
