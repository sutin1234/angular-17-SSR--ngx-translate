import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <p>
     {{ 'homeTitle' | translate }}
    </p>
  `,
  styles: ``
})
export class HomeComponent {


  translateService = inject(TranslateService)
  title = 'angular 17 @ngx-translate SSR';
  browserLang = this.translateService.getBrowserLang();
  currentLang = this.translateService.currentLang;
  activeRoutes = inject(ActivatedRoute)
  router = inject(Router)


  constructor() {

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        const { lang } = this.activeRoutes.snapshot.params || { lang: 'en' }
        if (lang) {
          this.translateService.use(lang);
          this.translateService.setDefaultLang(lang);
        }
      }
    })
  }


}
