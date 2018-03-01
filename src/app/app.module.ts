import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CreatingYourCharacterComponent } from './creating-your-character/creating-your-character.component';
import { FaqComponent } from './faq/faq.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { IntroductionToRoleplayComponent } from './introduction-to-roleplay/introduction-to-roleplay.component';
import { MaterialsModule } from './materials/materials.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResourcesComponent } from './resources/resources.component';
import { RulesComponent } from './rules/rules.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { ArticlesComponent } from './articles/articles.component';


const appRoutes: Routes = [
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'resources', component: ResourcesComponent},
  { path: 'upcoming-events', component: UpcomingEventsComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/introduction-to-roleplay', component: IntroductionToRoleplayComponent },
  { path: 'articles/creating-your-character', component: CreatingYourCharacterComponent },
  { path: '', redirectTo: '/getting-started', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CreatingYourCharacterComponent,
    FaqComponent,
    GettingStartedComponent,
    IntroductionToRoleplayComponent,
    PageNotFoundComponent,
    RulesComponent,
    ResourcesComponent,
    UpcomingEventsComponent,
    ArticlesComponent,
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
