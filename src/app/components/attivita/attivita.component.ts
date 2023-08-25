import { Component } from '@angular/core';
import { IPost } from 'src/app/interfaces/ipost';
import { IUser } from 'src/app/interfaces/iuser';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-attivita',
  templateUrl: './attivita.component.html',
  styleUrls: ['./attivita.component.scss'],
})
export class AttivitaComponent {
  constructor(private crudSrv: CrudService) {}

  posts!: IPost[];
  myPosts!: IPost[];
  user!: IUser;

  ngOnInit() {
    this.crudSrv.getMeUsers().subscribe((res) => {
      this.user = res;
      this.crudSrv.getAllThePost().subscribe((res2) => {
        console.log('tutti i post', res2, typeof res2);
        this.myPosts = res2.filter((p) => p.user._id === this.user._id);
        console.log('filtrati post', this.myPosts, typeof this.myPosts);

        // this.posts = res2;
        // this.posts.user.blueprint.blueprint.product.components = Object.fromEntries(
        //   Object.entries(this.posts.user.blueprint.blueprint.product.components).filter(([, value]) => value.available)
        // );
      });
    });
  }
}
