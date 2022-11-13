import { Component, OnInit } from '@angular/core';
import { ListOpportunite } from 'src/app/models/opportunite.interface';
import { OpportunitegetService } from 'src/app/services/opportuniteservice/opportuniteget.service';
import { CandOpp } from 'src/app/models/opportunite.interface';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-opportunite',
  templateUrl: './list-opportunite.component.html',
  styleUrls: ['./list-opportunite.component.css']
})
export class ListOpportuniteComponent implements OnInit {
   listopportunite :ListOpportunite[] = [] ;
   user: any
  dict: any
   candopp : CandOpp = {
    id_opportunity :  "" ,
    mail:  "" ,
    mdp :  "" ,
    id_cand :  "" ,
   }
  constructor(private opportunitegetService : OpportunitegetService) { }

  Postuler(id_opp:any){

    this.user = localStorage.getItem("user")
    if (this.user){
    this.dict = JSON.parse(this.user)


    this.candopp["mail"] = this.dict["email"]
    this.candopp["mdp"] = this.dict["mdp"]
    this.candopp["id_cand"] = this.dict["_id"]
    }else{
      this.candopp["mail"] = ""
    this.candopp["mdp"] = ""
    }
    this.candopp["id_opportunity"] = id_opp

    if (this.candopp["mail"]){
      console.log(" ----- +++ 0",this.candopp)
    this.opportunitegetService.postulerOpp(this.candopp).subscribe(

      data => {

        if(this.user){
        console.log("success!", data),
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        ).then((result)=>{
          if(result.isConfirmed){
          location.replace('/list_opportunite');
          }
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Connecter-vous',
        text: 'Something went wrong!',
        footer: '<a href="/connexion">connexion</a>'
      })
    }
    },
      error => {
        console.error("couldn't post because", error),
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }


    )}else{
      Swal.fire({
        icon: 'error',
        title: 'Connecter vous',
        text: 'Something went wrong!',
        footer: '<a href="/connexion">Connecter Ici !</a>'
      })
    }
  }

  ngOnInit(): void {
    this.getlistopppotunité();
  }
  getlistopppotunité(){
    this.opportunitegetService.getlistopportunité().subscribe((data:ListOpportunite[]) =>{
      this.listopportunite= data ;
       console.log(data);

     });
  }
}
