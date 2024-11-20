import { Route } from "@angular/router";
import { PipesDocumentationComponent } from "../pipes-documentation/pipes-documentation.component";

export const pipesRoutes: Route[] = [
    {
        path: '',
        component: PipesDocumentationComponent
    }
]