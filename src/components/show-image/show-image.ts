import { Component, Input } from '@angular/core';

@Component({
  selector: 'show-image',
  templateUrl: 'show-image.html'
})
export class ShowImageComponent {
  @Input('fileData') fileData: any;

  constructor() {
    setInterval(this.onFileLoaded);
    
  }
  onFileLoaded(){
      console.log(this.fileData)
  }

}
