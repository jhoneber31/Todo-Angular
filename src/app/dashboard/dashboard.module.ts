import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { InputFormComponent } from './components/input-form/input-form.component';


@NgModule({
  declarations: [
    HomePageComponent,
    LayoutPageComponent,
    SidebarComponent,
    TopMenuComponent,
    InputFormComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
