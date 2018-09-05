import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  fileList = [];
  uploadUrl = '';
  constructor(public navCtrl: NavController) {

  }
  onSelectChanged(evt){
    const files = evt.target.files;
    this.fileList = files;
  }

}
