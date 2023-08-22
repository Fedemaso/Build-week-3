import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/interfaces/iuser';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  constructor(private crudSrv: CrudService) {}

  user!: any;
  allUsers!: any;


  ngOnInit() {
    this.crudSrv.getMeUsers().subscribe((res) => {
      this.user = res;
      console.log(this.user);
    });

    // this.crudSrv.getAllUsers().subscribe((res) => {
    //   this.allUsers = res;
    //   console.log(this.allUsers)
    // })
  }
}
