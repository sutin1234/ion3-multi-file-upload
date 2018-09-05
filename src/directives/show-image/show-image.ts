import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[showImage]' // Attribute selector
})
export class ShowImageDirective {
  @Input() showImage: any;

  constructor(public elementRef: ElementRef, public render: Renderer2) {
    //console.log('Hello ShowImageDirective Directive');
    setTimeout(() => {
      //console.log(this.showImage)
      this.renderImage(this.showImage);
    }, 300);

  }
  renderImage(image) {
    //console.log(image)
    this.readImage(image).then((imgBlob: any) => {
      let child = document.createElement('img');
      child.src = imgBlob;
      this.render.appendChild(this.elementRef.nativeElement, child);
    });
  }
  readImage(img) {
    return new Promise((resolve, reject) => {
      const rd = new FileReader();
      rd.onload = (evt: any) => {
        resolve(evt.target.result);
      }
      rd.readAsDataURL(img);
    });
  }

}
