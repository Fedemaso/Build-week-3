import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { IUser } from 'src/app/interfaces/iuser';
import { IExperience } from 'src/app/interfaces/iexperience';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  selector: 'app-esperienza',
  templateUrl: './esperienza.component.html',
  styleUrls: ['./esperienza.component.scss']
})
export class EsperienzaComponent {
  constructor(private crudSrv: CrudService) {}

  allTheExperiences!: any
  user!: any

  ngOnInit(){
    this.crudSrv.user$.subscribe((res) =>{
      this.user = res
    })
    this.crudSrv.getAllTheExp(this.user._id).subscribe((res) =>{
    this.allTheExperiences = res
    console.log("Esperienza", this.allTheExperiences)
    })
  }
}
