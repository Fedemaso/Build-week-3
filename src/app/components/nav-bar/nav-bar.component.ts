import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private crudSrv: CrudService) {}

  user!: any;
  ngOnInit() {
    this.crudSrv.getMeUsers().subscribe((res) => {
      this.user = res;
      console.log(this.user);
    });
  }

}
