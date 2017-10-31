import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './root/app.component';
import {LibModule} from '../../lib/lib.module';

@NgModule({
              imports: [
                  BrowserModule,

                  LibModule.forRoot(),
              ],
              declarations: [
                  AppComponent,
              ],
              bootstrap: [
                  AppComponent,
              ],
              providers: [
              ],
          })
export class AppModule {
}
