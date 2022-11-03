import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { PzmInputPasswordModule } from '@digital-plant/zui-components';
import { InputPasswordBasicExampleComponent } from './examples/input-password-basic-example/input-password-basic-example.component';
import { InputPasswordExampleComponent } from './input-password-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(InputPasswordExampleComponent)),
    ReactiveFormsModule,
    FormsModule,
    PzmInputPasswordModule,
  ],
  declarations: [InputPasswordExampleComponent, InputPasswordBasicExampleComponent],
  exports: [InputPasswordExampleComponent],
})
export class InputPasswordExampleModule {}

