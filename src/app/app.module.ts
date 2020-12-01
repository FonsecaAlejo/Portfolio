import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience-home/work-experience.component';
import { EducationComponent } from './components/education/education.component';
import { AbilityComponent } from './components/ability/ability.component';
import { TechnologicalSkillsComponent } from './components/technological-skills/technological-skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { WorkExperienceDetailsComponent } from './components/work-experience/work-experience-details/work-experience-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    WorkExperienceComponent,
    EducationComponent,
    AbilityComponent,
    TechnologicalSkillsComponent,
    ContactComponent,
    HomeComponent,
    WorkExperienceDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
