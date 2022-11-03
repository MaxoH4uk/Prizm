import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import {
  PolymorphContent,
  pzmPure,
  PzmToastAppearance,
  PzmToastOptions,
  PzmToastPosition,
  PzmToastService,
} from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-example-example',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent {
  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
    );

  readonly exampleMessageInfo: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/message-info-example/message-success-example.component.ts'),
    HTML: import('!!raw-loader!./examples/message-info-example/message-success-example.component.html'),
  };

  readonly exampleMessageWarning: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/message-warning-example/message-warning-example.component.ts'),
    HTML: import('!!raw-loader!./examples/message-warning-example/message-warning-example.component.html'),
  };

  readonly exampleMessageDanger: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/message-danger-example/message-success-example.component.ts'),
    HTML: import('!!raw-loader!./examples/message-danger-example/message-success-example.component.html'),
  };

  readonly exampleMessageSuccess: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/message-success-example/message-success-example.component.ts'),
    HTML: import('!!raw-loader!./examples/message-success-example/message-success-example.component.html'),
  };

  readonly exampleToast: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/toast-example/toast-example.component.ts'),
    HTML: import('!!raw-loader!./examples/toast-example/toast-example.component.html'),
  };

  readonly appearanceVariants: ReadonlyArray<PzmToastAppearance> = [
    'info',
    'success',
    'warning',
    'danger',
  ];
  appearance: PzmToastAppearance = this.appearanceVariants[0];

  readonly containerId = 'test-inline-container';
  readonly positionVariants: ReadonlyArray<PzmToastOptions['position']> = [
    PzmToastPosition.TOP_RIGHT,
    PzmToastPosition.TOP_LEFT,
    PzmToastPosition.TOP_MIDDLE,
    PzmToastPosition.BOTTOM_RIGHT,
    PzmToastPosition.BOTTOM_LEFT,
    PzmToastPosition.BOTTOM_MIDDLE,
    this.containerId
  ];
  position: PzmToastOptions['position'] = this.positionVariants[0];
  timer = 3000;
  isPlatform = false;
  id = '';

  title: PolymorphContent = 'Заголовок';
  content: PolymorphContent = 'Содержимое';


  constructor(private readonly toastService: PzmToastService) {}

  @pzmPure
  public getContentVariants(
    template: TemplateRef<Record<string, unknown>>,
  ): readonly PolymorphContent[] {
    return [
      'Привет',
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      'Lorem',
      template
    ];
  }

  public showToast(): void {
    this.toastService.create(
      this.content,
      {
        timer: this.timer,
        appearance: this.appearance,
        position: this.position,
        isPlatform: this.isPlatform,
        id: this.id,
        title: this.title
      }
    );
  }
}
