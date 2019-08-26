import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import { createCustomElement } from '@angular/elements';
import { DraggableComponent } from './draggable/draggable.component';

@NgModule({
  declarations: [
    CustomButtonComponent,
    CustomHeaderComponent,
    DraggableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [CustomButtonComponent, CustomHeaderComponent, DraggableComponent]
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(CustomButtonComponent, { injector: this.injector });
    customElements.define('my-button-element', el);
    const el2 = createCustomElement(CustomHeaderComponent, { injector: this.injector });
    customElements.define('custom-header', el2);
    const el3 = createCustomElement(DraggableComponent, { injector: this.injector });
    customElements.define('my-draggable', el3);
  }
}
