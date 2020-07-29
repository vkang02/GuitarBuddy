
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { LandingComponent} from "./pages/landing/landing.component";

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}