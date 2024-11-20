import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesDocumentationComponent } from '../pipes-documentation/pipes-documentation.component';
import { RouterModule } from '@angular/router';
import { pipesRoutes } from './pipes.routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, PipesDocumentationComponent, RouterModule.forChild(pipesRoutes)
  ]
})
export class PipesModule { }
