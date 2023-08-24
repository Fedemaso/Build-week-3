import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ConsigliatoPerTeComponent } from './components/consigliato-per-te/consigliato-per-te.component';
import { AnalisiComponent } from './components/analisi/analisi.component';
import { RisorseComponent } from './components/risorse/risorse.component';
import { AttivitaComponent } from './components/attivita/attivita.component';
import { EsperienzaComponent } from './components/esperienza/esperienza.component';
import { FormazioneComponent } from './components/formazione/formazione.component';
import { CompetenzeComponent } from './components/competenze/competenze.component';
import { LingueComponent } from './components/lingue/lingue.component';
import { InteressiComponent } from './components/interessi/interessi.component';
import { CauseComponent } from './components/cause/cause.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { EditExperienceComponent } from './pages/edit-experience/edit-experience.component';
import { HomeProfileComponent } from './components/home-profile/home-profile.component';
import { HomeRecentiComponent } from './components/home-recenti/home-recenti.component';
import { HomeLinkedinNewsComponent } from './components/home-linkedin-news/home-linkedin-news.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { HomeCommentComponent } from './components/home-comment/home-comment.component';
import { ModaleComponent } from './components/modale/modale.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserPageComponent,
    FooterComponent,
    AsideComponent,
    UserInfoComponent,
    ConsigliatoPerTeComponent,
    AnalisiComponent,
    RisorseComponent,
    AttivitaComponent,
    EsperienzaComponent,
    FormazioneComponent,
    CompetenzeComponent,
    LingueComponent,
    InteressiComponent,
    CauseComponent,
    HomeComponent,
    EditExperienceComponent,
    HomeProfileComponent,
    HomeRecentiComponent,
    HomeLinkedinNewsComponent,
    HomeMainComponent,
    HomeCommentComponent,
    ModaleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //NgModule, //se attivato manda in crash il form di exit exp
    NgbModule,
    HttpClientModule,
    NgbDatepickerModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
