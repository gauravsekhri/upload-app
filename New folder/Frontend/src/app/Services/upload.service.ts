import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  title = 'fileUpload';
  images;
  multipleImages = [];
  progressCount:any = 0;

  constructor(private http: HttpClient) { }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  selectMultipleImage(event){
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
  }

  // onSubmit(){
  //   const formData = new FormData();
  //   formData.append('file', this.images);

  //   this.http.post<any>('http://localhost:3000/file', formData).subscribe(
  //     (res) => console.log(res),
  //     (err) => console.log(err)
  //   );
  // }

  onSubmit(){
    const formData = new FormData();
    formData.append('newimg', this.images);

    this.http.post<any>('http://localhost:8080/api/surveys/ab', formData, {
      reportProgress: true,
      observe: 'events',
      responseType: 'text' as 'json'
    })
    .subscribe(event => {
      if(event.type === HttpEventType.UploadProgress){
        this.progressCount = Math.round(event.loaded / event.total * 100);
        console.log("Upload Progress " + this.progressCount);
        (document.getElementById("prog") as HTMLInputElement).style.width = this.progressCount + "%";
      }
      else if (event.type === HttpEventType.Response){
        console.log(event)
      }
    }
    );
  }

  onMultipleSubmit(){
    const formData = new FormData();
    for(let img of this.multipleImages){
      formData.append('files', img);
    }

    this.http.post<any>('http://localhost:3000/multipleFiles', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
