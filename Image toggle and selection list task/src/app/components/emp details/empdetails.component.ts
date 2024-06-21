import { Component } from '@angular/core';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrl: './empdetails.component.css'
})
export class EmpdetailsComponent {
  emp:any=[
    {id:101,Name:"Nirmal Raj",salary:95000,address:"Chennai",gender:"Male"},
  
    {id:102,Name:"Sandhya",salary:94000,address:"Chennai",gender:"Female"},
  
    {id:103,Name:"Ikfan",salary:93000,address:"Chennai",gender:"Male"},
  
    {id:104,Name:"Sindhuja",salary:90000,address:"Chennai",gender:"Female"},
  
    {id:105,Name:"Dala",salary:93000,address:"Chennai",gender:"Male"}
  ]
}
