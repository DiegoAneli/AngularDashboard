import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app-routing.module';
import { GraphQLModule } from './app/graphql.module';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      
    ]),
    importProvidersFrom(AppRoutingModule, GraphQLModule, HttpClientModule)
  ]
}).catch(err => console.error(err));
