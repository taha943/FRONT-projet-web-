import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Acceuil/navbar/navbar.component';
import { FooterComponent } from './Acceuil/footer/footer.component';
import { AuthComponent } from './connexion/auth/auth.component';
import { InscriptionComponent } from './connexion/auth_inscription/inscription.component';
import { ListOpportuniteComponent } from './Candidat/Opportunite/list-opportunite/list-opportunite.component';
import { MesOpportuniteComponent } from './Candidat/Opportunite/mes-opportunite/mes-opportunite.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './api.service';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AuthComponent,
    InscriptionComponent,
    ListOpportuniteComponent,
    MesOpportuniteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NgWizardModule.forRoot(ngWizardConfig),
    FormsModule, ReactiveFormsModule,
    NgbModule,
    HttpClientModule

  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
