import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { MatButtonModule }     from '@angular/material';
import { MatCardModule }       from '@angular/material/card';
import { MatMenuModule }       from '@angular/material';
import { MatToolbarModule }    from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
  ],
})
export class MaterialsModule { }
