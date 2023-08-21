import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  constructor(private crudSrv: CrudService) {}

  users!: any;
  allUsers!:any;

  ngOnInit() {
    this.crudSrv.getMeUsers().subscribe((res) => {
      this.users = res;
      console.log(this.users);
    });

    this.crudSrv.getAllUsers().subscribe((res) => {
      this.allUsers = res;
      console.log(this.allUsers)
    })
  }
}
