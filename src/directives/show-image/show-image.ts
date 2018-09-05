import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[showImage]' // Attribute selector
})
export class ShowImageDirective {
  @Input() showImage: any;

  constructor(public el: ElementRef, public render: Renderer) {
    console.log('Hello ShowImageDirective Directive');
    setTimeout(() => {
      console.log(this.showImage)
    }, 2000);

  }
  renderImage(image){
    
  }

}
