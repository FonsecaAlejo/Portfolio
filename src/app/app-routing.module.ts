import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationDetailsComponent } from './components/education/education-details/education-details.component';

//Components
import { HomeComponent } from './components/home/home.component';
import { WorkExperienceDetailsComponent } from './components/work-experience/work-experience-details/work-experience-details.component';
  
const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "work-experience-details", component: WorkExperienceDetailsComponent},
  { path: "education-details", component: EducationDetailsComponent},
  {path: "**", pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
