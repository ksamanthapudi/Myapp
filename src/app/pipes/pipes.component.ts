import { Component, OnInit } from '@angular/core';
import { PackagePipe } from '../package.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name:string = "hello pipes";
  public city:string= "HYD";
  public dob:string = "10-05-2020";
  public today: Date= new Date();

  public user:any = {name: 'Abc', phone:63044};

  public price:number=100;
  public productcost:number=100;
  public employeepackage:number=1000;
  public age:number =27;
  public marks:number= 90;
  
  

  


  constructor() { }

  ngOnInit(): void {
  }

}
