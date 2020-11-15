import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {AngMaterialModule} from "../ang-material/ang-material.module";
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import {SharedModule} from "../shared/shared.module";
import {AuthService} from "./services/auth.service";
import { LoginComponent } from './components/login/login.component';
import {AuthGuard} from "./guards/auth.guard";


@NgModule({
  declarations: [HeaderComponent, FooterComponent, Test1Component, Test2Component, LoginComponent],
  providers: [AuthService, AuthGuard],
  exports: [HeaderComponent, FooterComponent],
  imports: [CommonModule, CoreRoutingModule, AngMaterialModule, SharedModule],
})
export class CoreModule {}
