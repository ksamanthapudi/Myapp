import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  public userForm:FormGroup=new FormGroup(
    {
      name:new FormControl(),
      phone:new FormControl(),
      dob:new FormControl(),
      address:new FormControl(

       {
         city: new FormControl(),
         pin: new FormControl()
       }
      ),
      cards: new FormArray([])
      
    }
  )

  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  add(){
    this.cardsFormArray.push(
      new FormGroup(
        {
          name: new FormControl(),
          expiry: new FormControl(),
          cvv: new FormControl(),
      
      }
      )
    )
  }

  constructor() { }

  ngOnInit(): void {
  }
  Submit(){
    console.log(this.userForm);
  }

}
