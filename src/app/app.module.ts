import { BrowserAnimationsModule }         from '@angular/platform-browser/animations';
import { BrowserModule }                   from '@angular/platform-browser';
import { NgModule }                        from '@angular/core';
import { RouterModule, Routes }            from '@angular/router';

import { AppComponent }                    from './app.component';
import { FaqComponent }                    from './faq/faq.component';
import { GettingStartedComponent }         from './getting-started/getting-started.component';
import { IntroductionToRoleplayComponent } from './introduction-to-roleplay/introduction-to-roleplay.component';
import { MaterialsModule }                 from './materials/materials.module';
import { PageNotFoundComponent }           from './page-not-found/page-not-found.component';
import { ResourcesComponent }              from './resources/resources.component';
import { RulesComponent }                  from './rules/rules.component';


const appRoutes: Routes = [
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'resources', component: ResourcesComponent},
  { path: 'introduction-to-roleplay', component: IntroductionToRoleplayComponent },
  { path: '', redirectTo: '/getting-started', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    GettingStartedComponent,
    PageNotFoundComponent,
    RulesComponent,
    ResourcesComponent,
    IntroductionToRoleplayComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BrowserModule,
    MaterialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
