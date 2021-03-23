import { Component, OnInit } from '@angular/core';

import { Router} from '@angular/router';
@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.css']
})
export class FireComponent implements OnInit{
  

  constructor(  public rout:Router ) {
    
   }

  ngOnInit(): void {
 
  }
  routs()
  {
    this.rout.navigate(['./water'])
  }


}
