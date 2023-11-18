import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemDialogComponent } from './shared/components/add-item-dialog/add-item-dialog.component';
import { MenuBarComponent } from './shared/components/menu-bar/menu-bar.component';
import { DetailComponent } from './views/components/detail/detail.component';
import { HomeComponent } from './views/components/home/home.component';
import { ImpressumComponent } from './views/components/impressum/impressum.component';
import { OverviewComponent } from './views/components/overview/overview.component';
import {
  MessageDetailComponent,
  MessageListComponent,
} from './views/components/message';

// This module is more or less the core-module of the application.
// In this case such a module is needed to declare the used components and all relevant modules at once.
// In difference to the AppModule you else could use the Standalone-components.
// This approach is represented by components in the "shared" folder.
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    DetailComponent,
    ImpressumComponent,
    MessageListComponent,
    MessageDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MenuBarComponent,
    MatToolbarModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    AddItemDialogComponent,
    // No MessageDetailDialogComponent here, because it is a standalone component which is loaded by Angular Material DialogRef.
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
