import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KeranjangBelanjaPage } from './keranjang-belanja.page';

const routes: Routes = [
  {
    path: '',
    component: KeranjangBelanjaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KeranjangBelanjaPage]
})
export class KeranjangBelanjaPageModule {}
