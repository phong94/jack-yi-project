import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'media', component: MediaComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'home', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}