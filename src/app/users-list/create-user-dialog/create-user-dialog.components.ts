import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserFormComponent } from '../../create-user-form/create-user-form.component';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrl: './create-user-dialog.component.scss',
  imports: [MatButtonModule, MatIconModule, MatCardModule],
  standalone: true,
})
export class CreateUserDialogComponent {
  readonly dialog = inject(MatDialog);

  @Output()
  createUser = new EventEmitter();

  onCreateUser(user: IUser) {
    this.createUser.emit(user);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateUserFormComponent);

    dialogRef.afterClosed().subscribe((createdResult: IUser) => {
      console.log('The dialog was closed');
      console.log(createdResult);
      if (createdResult) {
        this.createUser.emit(createdResult);
      }
    });
  }
}