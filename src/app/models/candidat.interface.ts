export interface Candidat{
  email:string,
  mdp:string,
  num_tel:string,
  github:string,
  linkedin:string,
  competences: compet [],
  experiences: exp[]
}

export interface compet{
  comp:string
}

export interface exp{
  duree:string,
  detail:string,
}


