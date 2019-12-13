import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material'
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule }    from '@angular/common/http';
import { ArtistService } from './services/artist.service';
import {
  MatButtonModule,
  MatExpansionModule,
  MatNativeDateModule,
MatDatepickerModule

  } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: 'create', component: CreateComponent},
  { path: 'edit', component: EditComponent},
  { path: 'list', component: ListComponent},
  { path: ' ', redirectTo: '/list', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    ReadComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
