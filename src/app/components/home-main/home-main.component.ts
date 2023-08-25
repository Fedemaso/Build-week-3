import { IComments } from './../../interfaces/icomments';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IPost } from 'src/app/interfaces/ipost';
import { IUser } from 'src/app/interfaces/iuser';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss'],
})
export class HomeMainComponent {
  @ViewChild('f', { static: true }) form!: NgForm;

  constructor(private crudSrv: CrudService, private modalService: NgbModal) {}
  user!: IUser;
  allPost!: IPost[];
  formData!: IPost;
  formComment!: IComments;
  postIdToComment!: string;
  postComments!: IComments[];

  ngOnInit() {
    this.crudSrv.getMeUsers().subscribe((res) => {
      this.user = res;
      console.log(this.user);
    });
    this.crudSrv.getAllThePost().subscribe((res) => {
      this.allPost = res.slice(-10);
      this.allPost.reverse();
      console.log(this.allPost);
    });
  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  submit(f: NgForm) {
    this.formData = f.form.value;
    console.log('this Form', this.formData, typeof this.formData);
    this.crudSrv.postAPost(this.formData).subscribe((res) => {
      console.log('NEW Post in home-main:', res);
    });
  }
}
