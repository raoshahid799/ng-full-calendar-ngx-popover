import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { PopoverComponent } from './popover/popover.component';

@Injectable({
  providedIn: 'root'
})
export class PopoverService {

  constructor(private factoryResolver: ComponentFactoryResolver) { }

  public showPopover(elementRef: ViewContainerRef, model: any) {
    elementRef.clear();
    const factory = this.factoryResolver.resolveComponentFactory(PopoverComponent);
    const componentRef = elementRef.createComponent(factory);
    (<PopoverComponent>componentRef.instance).initializeContent(model);
  }

}
