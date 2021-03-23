import { NgSwitchCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbdwillimsService } from '../abdwillims.service';

@Component({
  selector: 'app-air',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.css']
})
export class AirComponent implements OnInit {
  checked = false;
  check =false;
  fonsiz = false;
  constructor(public air: Router, public harry:AbdwillimsService) { }
  season: any;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  climate: any;
  ngOnInit(): void {
  }
  ff:any
  stalin()
  {
   this.ff={'background':'blue', 'color':'white','font-size':'50px' };
   
  }
  divya() {
    this.air.navigate(['/fire/water'])
  }
  dmk:boolean=false;

  prav()
  {
    this.dmk=true;
  }
 
  sus()
  {
    this.dmk=false;
  }
public mani="red";

}
