import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  translateService = inject(TranslateService)
  title = 'angular 17 @ngx-translate SSR';
  browserLang = this.translateService.getBrowserLang();
  currentLang = this.translateService.currentLang;
  activeRoutes = inject(ActivatedRoute)
  router = inject(Router)


}
