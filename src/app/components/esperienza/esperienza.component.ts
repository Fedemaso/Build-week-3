import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { IUser } from 'src/app/interfaces/iuser';
import { IExperience } from 'src/app/interfaces/iexperience';

@Component({
  selector: 'app-esperienza',
  templateUrl: './esperienza.component.html',
  styleUrls: ['./esperienza.component.scss']
})
export class EsperienzaComponent {
  constructor(private crudSrv: CrudService) {}

  allTheExperiences!: any

  ngOnInit(){
    this.crudSrv.getAllTheExp("1").subscribe((res) =>{
    this.allTheExperiences = res
    console.log(this.allTheExperiences)
    })
  }
}
