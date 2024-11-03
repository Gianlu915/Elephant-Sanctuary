import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { DonateComponent } from './components/donate/donate.component';

const routes: Routes = [
    
    {path: '', component: HomepageComponent},
    {path: 'about', component: AboutComponent},
    {path: 'volunteer', component: VolunteerComponent},
    {path: 'donate', component: DonateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
