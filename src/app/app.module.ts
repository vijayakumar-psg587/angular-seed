import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngMaterialModule} from "./modules/ang-material/ang-material.module";
import {SharedModule} from "./modules/shared/shared.module";
import {CoreModule} from "./modules/core/core.module";
import {HttpClientModule} from "@angular/common/http";
import {JWT_OPTIONS, JwtModule} from "@auth0/angular-jwt";
import {AuthService} from "./modules/core/services/auth.service";

// export function appJwtOptionsFactory(authService: AuthService) {
//   return {
//     tokenGetter: async() => {
//       return await authService.getAccessToken();
//     }
//   }
// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngMaterialModule,
    CoreModule,
    SharedModule,
    // JwtModule.forRoot({
    //   config: {
    //     authScheme: 'Bearer',
    //     headerName: 'Authorization',
    //     throwNoTokenError: true,
    //   },
    //   jwtOptionsProvider: {
    //     provide: JWT_OPTIONS,
    //     useFactory: appJwtOptionsFactory,
    //     deps: [AuthService]
    //   }
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
