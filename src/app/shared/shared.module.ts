import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    // Shared Modules
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,    
    // Shared Components
    FooterComponent,
    HeaderComponent,
    SidebarComponent
    
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  providers: [
    
  ]
})
export class SharedModule { }
