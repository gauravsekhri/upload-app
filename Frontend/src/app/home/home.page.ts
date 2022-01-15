import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { UploadService } from '../Services/upload.service';

const URL = 'http://localhost:8080/api/surveys/abcd/';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'image'
  });

  uploadone:any;
  userForm:any;

  constructor(private UploadService : UploadService) {}

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log('Uploaded File Details:', item);
    };
  }

  handleupload(event){
    console.log("uploaded");
    console.log(event);
  }

}
