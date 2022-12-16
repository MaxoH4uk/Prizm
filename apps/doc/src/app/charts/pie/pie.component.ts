import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/taiga-ui/addon-doc';
import { PrizmSize } from '@prizm-ui/components';

@Component({
  selector: 'prizm-button-example',
  templateUrl: './pie.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieComponent {
  sizeVariants: ReadonlyArray<PrizmSize> = ['s', 'm', 'xm', 'l', 'xl'];
  size: PrizmSize = this.sizeVariants[0];

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  readonly exampleOutline: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/prizm-charts-pie-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/prizm-charts-pie-example.component.html'),
  };

}
