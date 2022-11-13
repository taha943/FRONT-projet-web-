import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'

import { Candidat } from 'src/app/models/candidat.interface';

import Swal from 'sweetalert2'

import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  infoForm:FormGroup
  competenceForm: FormGroup
  expForm:FormGroup
  result : {} = {}
  Candidat : Candidat =
    {
        email:  "" ,
        mdp :  "" ,
        num_tel :  "" ,
        github :  "" ,
        linkedin : "",
        competences : [
          {
                comp : ""
          }
      ],
        experiences : [
          {
                duree :  "" ,
                detail :  ""
          }
      ]
    }






  constructor(
      private ngWizardService: NgWizardService,
      private fb:FormBuilder,
      private apiservice:ApiService
      ){

    this.competenceForm = this.fb.group({
      competences: this.fb.array([]) ,
    });

    this.result = {}
    this.expForm = this.fb.group({
      experiences: this.fb.array([]) ,
    })

    this.infoForm = this.fb.group({
      email:"",
      mdp:"",
      num_tel:"",
      github:"",
      linkedin:""
    })

  }
 stepStates = {
  normal: STEP_STATE.normal,
  disabled: STEP_STATE.disabled,
  error: STEP_STATE.error,
  hidden: STEP_STATE.hidden
};
config: NgWizardConfig = {
  selected: 0,
  theme: THEME.arrows,
  toolbarSettings: {
    toolbarExtraButtons: [
      { text: 'Finish', class: 'btn btn-info', event: () => {

        } }
    ],
  }
};
showPreviousStep(event?: Event) {
  this.ngWizardService.previous();
}
showNextStep(event?: Event) {
  this.ngWizardService.next();
}
resetWizard(event?: Event) {
  this.ngWizardService.reset();
}
setTheme(theme: THEME) {
  this.ngWizardService.theme(theme);
}
stepChanged(args: StepChangedArgs) {
  console.log(args.step);
}
isValidTypeBoolean: boolean = true;
isValidFunctionReturnsBoolean(args: StepValidationArgs) {
  return true;
}
isValidFunctionReturnsObservable(args: StepValidationArgs) {
  return of(true);
}


// addd information data

collectData1(){
  this.Candidat["email"] = this.infoForm.get("email")?.value
  this.Candidat["mdp"] = this.infoForm.get("mdp")?.value
  this.Candidat["num_tel"] = this.infoForm.get("num_tel")?.value
  this.Candidat["github"] = this.infoForm.get("github")?.value
  this.Candidat["linkedin"] = this.infoForm.get("linkedin")?.value

  this.ngWizardService.next();
}


// add competences

competences() : FormArray {
  return this.competenceForm.get("competences") as FormArray
}

newCompetence(): FormGroup {
  return this.fb.group({
    comp: '',
  })
}

addCompetence() {
  this.competences().push(this.newCompetence());
}

removecompetence(i:number) {
  this.competences().removeAt(i);
}

collectData2(){
  this.Candidat["competences"] = this.competenceForm.value
  this.ngWizardService.next();
}

// Experience data

newExperience(): FormGroup {
  return this.fb.group({
    duree: '',
    detail: ''
  })
}

experiences() : FormArray {
  return this.expForm.get("experiences") as FormArray
}

addExperience() {
  this.experiences().push(this.newExperience());
}

removeExperience(i:number) {
  this.experiences().removeAt(i);
}

collectData3(){
  this.Candidat["experiences"] = this.expForm.value
  console.log("candidat object final ",JSON.stringify(this.Candidat))

  this.apiservice.createCandidate(this.Candidat).subscribe(

    data => {
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

)
}

ngOnInit(): void {
  let serializedForm = JSON.stringify(this.result);
  console.log("serilazer ---- ",serializedForm)
}

}
