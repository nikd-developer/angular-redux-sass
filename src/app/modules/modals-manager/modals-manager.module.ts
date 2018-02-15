import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ModalsManagerService } from './modals-manager.service';
import { ModalsManagerComponent } from './modals-manager.component';

import { AlertModal } from './modals/alert-modal/alert-modal.component';

@NgModule({
  declarations: [
    ModalsManagerComponent,
    AlertModal
  ],
  exports: [
    ModalsManagerComponent
  ],
  entryComponents:[
    AlertModal
  ],
  imports: [
    SharedModule
  ],
  providers: [
    ModalsManagerService
  ]
})
export class ModalsManagerModule { }
