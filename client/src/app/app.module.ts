import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';
import { LoginService } from './service/login.service';
import { RegisterService } from './service/register.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderbarComponent } from './shared/headerbar/headerbar.component';
import { ImageuploadComponent } from './profile/imageupload/imageupload.component';
import { UserinfoComponent } from './profile/userinfo/userinfo.component';
import { ProfileModule } from './profile/profile.module';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import 'hammerjs';
import 'mousetrap';

@NgModule({
  declarations: [
    AppComponent,
    UserinfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    ProfileModule,
    NgxImageGalleryModule
  ],
  providers: [
    LoginService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

