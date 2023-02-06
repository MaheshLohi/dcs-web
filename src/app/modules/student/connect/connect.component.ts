import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostComponent } from 'app/modules/student/connect/posts/post.component';

@Component({
    selector     : 'connect',
    templateUrl  : './connect.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConnectComponent
{

  /* Constructor*/
  constructor(
     private _matDialog: MatDialog
    ) {
  }

  /* Open the note dialog*/
  addNewPost(): void
  {
    const dialogRef =  this._matDialog.open(PostComponent, {
      autoFocus: false,
      data     : {
          note: {}
      }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
  }

  
}
