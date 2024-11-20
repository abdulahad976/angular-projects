import { Routes } from '@angular/router';
import { HomeRouteComponent } from './components/homeRoute/home-route/home-route.component';
import { ServicesDocumentationComponent } from './services/services-documentation/services-documentation.component';
import { PipesDocumentationComponent } from './pipes/pipes-documentation/pipes-documentation.component';
import { DirectiveDocumentationComponent } from './directive/directive-documentation/directive-documentation.component';

export const routes: Routes = [
    {
        path: '',
        component : HomeRouteComponent
    },
    {
        path: 'services',
        component : ServicesDocumentationComponent
    },
    {
        path: 'pipes',
        component : PipesDocumentationComponent
    },
    {
        path: 'directives',
        component: DirectiveDocumentationComponent
    }
];
