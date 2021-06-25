import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FindComponent } from './find/find.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  { path:'header',component: HeaderComponent,},
  { path:'home',component: HomeComponent, },
  { path: 'about', component: AboutComponent,},
  { path: 'help', component: HelpComponent,},
  { path: 'contact-us', component: ContactUsComponent,},
  { path: 'gallery', component: GalleryComponent,},
  { path: 'services', component: ServicesComponent,},
  { path: 'footer', component: FooterComponent},
  { path: 'search', component: SearchComponent},
  { path:  'find',  component:FindComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
