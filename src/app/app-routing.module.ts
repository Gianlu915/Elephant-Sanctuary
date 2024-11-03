import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { VolunteerComponent } from './pages/volunteer/volunteer.component';
import { DonateComponent } from './pages/donate/donate.component';

const routes: Routes = [
    
    {path: '', component: HomepageComponent},
    {path: 'homepage', component: HomepageComponent},
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
