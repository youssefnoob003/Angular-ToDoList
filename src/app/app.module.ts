import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ItemList } from './services/item-list';
import { FinishedComponent } from './item/finished.component';
import { UpcomingItem } from './item/upcoming.component';
import { DeletedCoponent } from './item/deleted.component';
import { Edit } from './form/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    FormComponent,
    FinishedComponent,
    UpcomingItem,
    DeletedCoponent,
    Edit
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'All', component: ItemComponent},
      {path: 'new', component: FormComponent},
      {path: 'finished', component: FinishedComponent},
      {path: 'Upcoming', component: UpcomingItem},
      {path: 'deleted', component: DeletedCoponent},
      {path: 'edit', component: Edit}
    ])
  ],
  providers: [
    ItemList
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
