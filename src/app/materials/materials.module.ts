import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { MatButtonModule }     from '@angular/material';
import { MatMenuModule }       from '@angular/material';
import { MatToolbarModule }    from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
  ],
})
export class MaterialsModule { }
