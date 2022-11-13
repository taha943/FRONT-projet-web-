import { Component, OnInit } from '@angular/core';
import { ListOpportunite } from 'src/app/models/opportunite.interface';
import { OpportunitegetService } from 'src/app/services/opportuniteservice/opportuniteget.service';
@Component({
  selector: 'app-mes-opportunite',
  templateUrl: './mes-opportunite.component.html',
  styleUrls: ['./mes-opportunite.component.css']
})
export class MesOpportuniteComponent implements OnInit {
  listopportunite_cond :ListOpportunite[] = [] ; 
  user: any
  dict: any
  id_condidat: any


  constructor(private opportunitegetService : OpportunitegetService) { }


  getlistopppotunité_cond(){
    console.log("éhehehehehhehe")
    this.opportunitegetService.getlistopportunité_cond(this.id_condidat).subscribe((data:ListOpportunite[]) =>{
      console.log("teeeeeeeeeeeeeeeeest")
      this.listopportunite_cond= data ; 
       console.log(data);

     });
  }

  ngOnInit(): void {
    this.user = localStorage.getItem("user")
    this.dict = JSON.parse(this.user)
    this.id_condidat = this.dict["_id"]

    this.getlistopppotunité_cond()
    // localStorage.removeItem()  in logout

    console.log("localeUser --------------", this.user);
  }
  



 

}
