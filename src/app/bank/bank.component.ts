import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  public accounts:any = [];
  public term:string = "";

  constructor(private _bankService:BankService) {
  }

  ngOnInit(): void {
    
  }

  filter(){

    this._bankService.getFilterdAccounts(this.term).subscribe(

      (data:any)=>{    
        this.accounts = data;
      },

      (err:any)=>{
        alert("Internal server error");
      }
    )
   }

   pagination(page:number){
    this._bankService.getPagedAccounts(page).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
   }

  //  sort(){
  //   this._bankService.getSortedAccounts(this.column,this.order).subscribe(
  //     (data:any)=>{
  //       this.accounts = data;

  //     },
  //     (err:any)=>{
  //       alert("Internal server error");
  //     }
  //   )
  //  }
  //     }

  //     delete(id:String){
  //       this._bankService.deleteAccount(id).subscribe(
  //         (data:any)=> {
  //           alert("deleted successfully");
  //           location.reload();

  //         },
  //         (err:any)=>{
  //           alert("internal server error");
  //         }

  //       )
  //     }

  //     view(id:string){
  //       this.router.navigateByUrl('/dashboard/bank-details/'+id);
  //     }
    



}
