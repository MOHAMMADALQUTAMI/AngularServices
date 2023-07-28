import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ItemContainerComponent } from './ItemContainer/ItemContainer.component';
import { ItemFormComponent } from './ItemForm/ItemForm.component';
import { ItemDetailsComponent } from './ItemDetails/ItemDetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule } from '@angular/material/divider';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule } from '@angular/material/table';
import {MatSidenavModule } from '@angular/material/sidenav';
import {MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [				
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ItemContainerComponent,
    ItemFormComponent,
    ItemDetailsComponent,
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatDividerModule,MatFormFieldModule,MatTableModule,
    MatSidenavModule, MatInputModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'ItemContainer', component: ItemContainerComponent },
    ]),
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
