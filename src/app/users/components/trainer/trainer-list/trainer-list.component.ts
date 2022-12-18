import { ChangeDetectionStrategy } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogAlertDeleteComponent } from 'src/app/core/components/dialog-alert-delete/dialog-alert-delete.component';
import { User } from 'src/app/core/models/user.model';
import { UsersService } from 'src/app/core/services/usersService';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.scss']
})
export class TrainerListComponent implements OnInit {
  users!: User[];
  dataSource!: MatTableDataSource<User[]>;
  displayedColumn: string[] = ['id', 'firstName', 'lastName', 'email','username', 'website', 'role', 'profile', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private usersService: UsersService,
    private matDialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.refresh();

  }

  refresh() {
    /* tout ceci etait dans ngOnInit */
    this.usersService.getUsers().
      subscribe(users => {
        this.users = users;
        this.dataSource = new MatTableDataSource(<any>this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.changeDetectorRefs.detectChanges();
      }
      );
  }
  deleteUser(user: User) {
    const dialogRef = this.matDialog.open(DialogAlertDeleteComponent, {
      width: '30%',
      enterAnimationDuration: '600ms',
      exitAnimationDuration: '300ms',
      data: {
        message: "Voulez-vous vraiment supprimer cette utilisateur ??"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.data[0].confirmed) {
          this.usersService.deleteUser(user.id).subscribe(() => { window.location.reload(); });
        }
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
