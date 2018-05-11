import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routing';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { ModalGalleryModule } from 'angular-modal-gallery';
import {HeaderbarComponent} from '../shared/headerbar/headerbar.component';
@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ModalGalleryModule.forRoot()
  ],
  declarations: [
    ProfileComponent,
    ImageuploadComponent,
    HeaderbarComponent
  ]
})
export class ProfileModule { }
