import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-home-profile',
  templateUrl: './home-profile.component.html',
  styleUrls: ['./home-profile.component.scss'],
})
export class HomeProfileComponent {
  constructor(private crudSrv: CrudService) {}

  user!: any;
  ngOnInit() {
    this.crudSrv.getMeUsers().subscribe((res) => {
      this.user = res;
      console.log(this.user);
    });
  }
}
