import { NgModule, Optional, SkipSelf } from '@angular/core';
import {  UserService  } from './services';

@NgModule({
  imports: [
  ],
  providers: [
    UserService
  ],
  declarations: []
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() core: CoreModule ){
    if (core) {
        throw new Error('You should import core module only in the root module');
    }
  }
}
