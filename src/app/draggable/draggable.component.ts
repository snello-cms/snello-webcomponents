import { SimulatedService } from './simulated.service';
import { Component, OnInit, ViewChild, ViewContainerRef, Compiler, AfterViewInit, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css']
})
export class DraggableComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;
  data: any;

  @Input() url: string;
  @Input() name: string;

  constructor(private compiler: Compiler, public simulatedService: SimulatedService) { }

  ngAfterViewInit() {
    this.compiler.clearCache();
    let component: any;
    this.simulatedService.complete().subscribe(
      item => {
        component = Component(
          {
            template: item.html,
            styles: item.styles
          }
        )(class {
          values: any;
          constructor() {
            this.values = item.values;
          }
        });
      }
    );


    // Define the module using NgModule decorator.
    const module = NgModule({
      declarations: [component],
      providers: [HttpClient],
      imports: [CommonModule]
    })(class { });

    // Asynchronously (recommended) compile the module and the component.
    this.compiler.compileModuleAndAllComponentsAsync(module)
      .then(factories => {
        // Get the component factory.
        const componentFactory = factories.componentFactories[0];
        // Create the component and add to the view.
        const componentRef = this.container.createComponent(componentFactory);
      });
  }
}
