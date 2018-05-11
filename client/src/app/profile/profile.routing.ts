import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ImageuploadComponent } from './imageupload/imageupload.component';

const routes: Routes = [
    { path: '', component: ProfileComponent },
    { path: 'image', component: ImageuploadComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProfileRoutingModule { }
