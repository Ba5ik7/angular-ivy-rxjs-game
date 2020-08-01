import { Injectable, TemplateRef, Injector } from '@angular/core';
import { ComponentType, ComponentPortal } from '@angular/cdk/portal';


@Injectable()
export class WidgetService {

  containerComponent: ComponentType<any>;

  constructor(private _injector: Injector) { }

  // addWidget<T, D = any, R = any>(componentOrTemplateRef: ComponentType<T>, config?: DialogConfig) {
  //   config = this._applyConfigDefaults(config, config?: DialogConfig);

  //   const componentContainer = this._attachDialogContainer();

  //   const componentRef = this._attachComponentContent<T, R>(componentOrTemplateRef);

  //   // const injector = this._createInjector<T>(componentRef, componentContainer);

  // }

  // private _attachDialogContainer() {
  //   const container = this.containerComponent;
  //   const injector = Injector.create({
  //     parent: this._injector,
  //     providers: [{provide: DialogConfig, useValue: config}]
  //   });
  //   const containerPortal = new ComponentPortal(container, config.viewContainerRef, injector);
  //   const containerRef: ComponentRef<CdkDialogContainer> = overlay.attach(containerPortal);
  //   containerRef.instance._config = config;

  //   return containerRef.instance;
  // }

  // private _attachComponentContent<T, R>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>) {
    
  // }

  // private _createInjector<T>(
  //     dialogRef: any,
  //     dialogContainer: any): Injector {

  //   return Injector.create({parent: userInjector || this._injector, providers});
  // }

}