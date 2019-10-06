import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'list-produk', loadChildren: './list-produk/list-produk.module#ListProdukPageModule' },
  { path: 'listproduk', loadChildren: './listproduk/listproduk.module#ListprodukPageModule' },
  { path: 'tambah-produk', loadChildren: './tambah-produk/tambah-produk.module#TambahProdukPageModule' },
  { path: 'keranjang-belanja', loadChildren: './keranjang-belanja/keranjang-belanja.module#KeranjangBelanjaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
