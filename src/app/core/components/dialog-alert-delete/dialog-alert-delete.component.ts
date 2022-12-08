import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-alert-delete',
  templateUrl: './dialog-alert-delete.component.html',
  styleUrls: ['./dialog-alert-delete.component.scss']
})
export class DialogAlertDeleteComponent implements OnInit {
message!:string;
  constructor(public dialogRef: MatDialogRef<DialogAlertDeleteComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.message=data.message;
    }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }
  onValidated(){
    this.dialogRef.close({event:'close',data:[{confirmed:true}]});
  }

}
