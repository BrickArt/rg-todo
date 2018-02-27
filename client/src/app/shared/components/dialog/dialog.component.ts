import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.sass'],
    encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {

    constructor(private matDialogRef: MatDialogRef<DialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any ) { }

    ngOnInit() {
    }

    onClose() {
        this.matDialogRef.close();
    }

}
