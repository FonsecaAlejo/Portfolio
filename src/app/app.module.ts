import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { EducationComponent } from './components/education/education.component';
import { AbilityComponent } from './components/ability/ability.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    WorkExperienceComponent,
    EducationComponent,
    AbilityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
