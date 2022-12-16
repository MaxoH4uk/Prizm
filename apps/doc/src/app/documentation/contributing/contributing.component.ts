import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { prizmRawLoad } from '@prizm/taiga-ui/addon-doc';

@Component({
  selector: `prizm-codestyle`,
  templateUrl: `contributing.component.html`,
  styleUrls: [`./contributing.component.less`],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContributingComponent {
  readonly text = of(import(`!!raw-loader!../../../../../../CONTRIBUTING.md`)).pipe(switchMap(prizmRawLoad));
}
