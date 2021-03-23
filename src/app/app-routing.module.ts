import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { WaterComponent } from './water/water.component';
import { AirComponent } from './air/air.component';
import { FireComponent } from './fire/fire.component';
import { LandComponent } from './land/land.component';


const routes: Routes = [
  {
    path:"",
    component: AirComponent,
  children:[

  {
    path:"fire",
    component: FireComponent
  },
  {
    path:"water",
    component:WaterComponent
  },
{
  path:"**",
  component:LandComponent
},
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
