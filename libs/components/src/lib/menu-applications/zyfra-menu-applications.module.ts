import { NgModule } from '@angular/core';
import { ZyfraIconModule } from '../icon';
import { ZyfraMenuApplicationsComponent } from './zyfra-menu-applications.component';
import { CommonModule } from '@angular/common';
import { ZyfraMenuApplicationsItemComponent } from './zyfra-menu-applications-item/zyfra-menu-applications-item.component';
import { ZyfraSplitterModule } from '../splitter';
import { ZyfraTooltipModule } from '../tooltip';

@NgModule({
  declarations: [ZyfraMenuApplicationsComponent, ZyfraMenuApplicationsItemComponent],
  imports: [CommonModule, ZyfraIconModule, ZyfraSplitterModule, ZyfraTooltipModule],
  exports: [ZyfraMenuApplicationsComponent],
})
export class ZyfraMenuApplicationsModule {}
