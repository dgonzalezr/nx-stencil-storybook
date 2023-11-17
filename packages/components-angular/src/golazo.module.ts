import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { defineCustomElements } from '@legion/components/dist/loader';

import { DIRECTIVES } from './directives';

@NgModule({
  imports: [CommonModule],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class AngularModule {
  static forRoot(): ModuleWithProviders<AngularModule> {
    defineCustomElements();
    return {
      ngModule: AngularModule,
    };
  }
}
