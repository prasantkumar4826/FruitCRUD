import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FruitsService } from 'src/app/fruits/fruit.service';
import { Fruits } from 'src/app/fruits/fruits';

@Component({
  selector: 'app-add-early-warning-alert',
  templateUrl: './add-early-warning-alert.component.html',
  styleUrls: ['./add-early-warning-alert.component.css']
})
export class AddEarlyWarningAlertComponent implements OnInit {
  editID : any;
  @Input('editIDSent')
  set name(editIDSent:any){
  this.editID = editIDSent;
};
  
  fruitForm: Fruits = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
  };
 


  constructor(private fruitService:FruitsService,
    private router:Router) { }

  ngOnInit(): void {
    if(this.editID){
      this.fruitService.getById(this.editID).subscribe((data) => {
        this.fruitForm = data;
        console.log(this.fruitForm);
      });
    } else {
      this.fruitForm = {
        id: 0,
        name: '',
        price: 0,
        quantity: 0,
      };
    }
  }


  create(){
    this.fruitService.create(this.fruitForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/early-warning-alert-list/maintain"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

  update() {
    this.fruitService.update(this.fruitForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/early-warning-alert-list/maintain"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

  

}
