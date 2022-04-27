import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';


const routes: Routes = [
  {path: '', component:AdminDashboardComponent,
    children:[
      { path:'home', component:HomeComponent},
      { path:'services', component:ServicesComponent},
      { path:'contacts', component:ContactsComponent},
      { path:'about', component:AboutComponent},
      { path: '', redirectTo: '/admin/home', pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
