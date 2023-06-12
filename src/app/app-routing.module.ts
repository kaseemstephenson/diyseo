import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FawComponent } from './faw/faw.component';
import { SettingsComponent } from './settings/settings.component';
import { BillingComponent } from './billing/billing.component';
const routes: Routes = [
{path:"", component: HomeComponent},
{path:"home", component:HomeComponent},
{path:"faq", component:FawComponent},

{path:"settings", component:SettingsComponent},

{path:"billing", component:BillingComponent},




 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
