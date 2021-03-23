import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AbdwillimsService } from './abdwillims.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaterComponent } from './water/water.component';
import { AirComponent } from './air/air.component';
import { FireComponent } from './fire/fire.component';
import { LandComponent } from './land/land.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent,
    WaterComponent,
    AirComponent,
    FireComponent,
    LandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule
  ],
  exports:[
    MatCheckboxModule,
  MatRadioModule
  ],

  providers: [AbdwillimsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
