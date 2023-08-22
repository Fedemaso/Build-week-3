import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-attivita',
  templateUrl: './attivita.component.html',
  styleUrls: ['./attivita.component.scss']
})
export class AttivitaComponent {

  constructor(private crudSrv: CrudService) {}

  posts!:any;


  ngOnInit() {
    this.crudSrv.getAllThePost().subscribe((res) => {
      this.posts = res;
      console.log(this.posts);
    });
  }
}
