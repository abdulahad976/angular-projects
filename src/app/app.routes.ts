import { Routes } from '@angular/router';
import { HomeRouteComponent } from './components/homeRoute/home-route/home-route.component';
import { ServicesDocumentationComponent } from './services/services-documentation/services-documentation.component';
import { PipesDocumentationComponent } from './pipes/pipes-documentation/pipes-documentation.component';
import { DirectiveDocumentationComponent } from './directive/directive-documentation/directive-documentation.component';
import { OtherDocumentationComponent } from './Others/OthersDocumentation/other-documentation/other-documentation.component';
import { SignupComponent } from './Forms/signup/signup.component';
import { LoginComponent } from './Forms/login/login.component';
import { FormComponent } from './Others/form/form.component';

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
        loadChildren: ()=> import('./pipes/pipes/pipes.module').then((m)=>m.PipesModule)
    },
    {
        path: 'directives',
        component: DirectiveDocumentationComponent
    },
    {
        path: 'others',
        component: OtherDocumentationComponent
    },
    {
        path: 'others/apply',
        component: FormComponent
    },
    {
        path: 'signup',
        component: SignupComponent  
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
