import { Component, } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpEventType, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  fileList = [];
  uploadUrl = '';
  constructor(public navCtrl: NavController, public httpClient: HttpClient) {

  }
  onSelectChanged(evt){
    const files = evt.target.files;
    this.fileList = files;
  }
  onUploadFile(imageList){
    let fd = new FormData();
    this.fileList.forEach((el, index) => {
      fd.append("images", el[index]);
    });
    this.httpClient.post(this.uploadUrl,fd).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request sent!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header received!');
          break;
        case HttpEventType.DownloadProgress:
          const kbLoaded = Math.round(event.loaded / 1024);
          console.log(`Download in progress! ${ kbLoaded }Kb loaded`);
          break;
        case HttpEventType.Response:
          console.log('😺 Done!', event.body);
      }
    });
  }

}
