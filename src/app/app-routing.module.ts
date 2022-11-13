import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './connexion/auth/auth.component';
import { InscriptionComponent } from './connexion/auth_inscription/inscription.component';
import { ListOpportuniteComponent } from './Candidat/Opportunite/list-opportunite/list-opportunite.component';
import { MesOpportuniteComponent } from './Candidat/Opportunite/mes-opportunite/mes-opportunite.component';

const routes: Routes = [
  { path: "connexion", component: AuthComponent},
  { path: "mes_opportunite", component: MesOpportuniteComponent},
  { path: "list_opportunite", component: ListOpportuniteComponent},
  { path: "inscription", component: InscriptionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
