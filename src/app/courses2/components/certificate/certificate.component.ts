import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  USERS = [
    {
      "id": "1",
      "firstName": "IKITAMA",
      "lastName": "Larose",
      "username": "Roro",
      "email": "myemail@gmail.com",
      "password": "123",
      "biography": "Hi! im RoRo software engineering student and i'm really love code",
      "website": "https://github.com/LaroseIkitama",
      "roles": [
        "ADMIN",
        "LEARNER",
        "TRAINER"
      ]
    }
  ]
  constructor() { }

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas: { height: number; width: number; toDataURL: (arg0: string) => any; }) => {
      let fileWidth = 420;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('l', 'mm', 'a3');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position,fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

  ngOnInit(): void {
  }


  download() {

  }

}
