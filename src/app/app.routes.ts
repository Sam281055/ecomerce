import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';

export const routes: Routes = [
    { component: HomeComponent, path: 'home'},
    { component: CreateComponent, path: 'create'},
    { component: EditComponent, path: 'edit'},
    { path: '**', redirectTo:'home',pathMatch:'full'}
];
