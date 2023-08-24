import { IPost } from 'src/app/interfaces/ipost';
import { Component, Input, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { IComments } from 'src/app/interfaces/icomments';

@Component({
  selector: 'app-home-comment',
  templateUrl: './home-comment.component.html',
  styleUrls: ['./home-comment.component.scss'],
})
export class HomeCommentComponent {
  @Input() post!: IPost;
  @ViewChild('fc', { static: true }) formC!: NgForm;
  constructor(private crudSrv: CrudService, private modalService: NgbModal) {}
  formData!: IPost;
  formComment!: IComments;
  postIdToComment!: string;
  postComments!: IComments[];

  ngOnInit() {
    this.postIdToComment = this.post._id;
    this.showComments(this.postIdToComment);
  }
  openComment(content: any, postId: string) {
    this.postIdToComment = postId;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  submitComment(fc: NgForm) {
    this.formComment = fc.form.value;
    this.formComment.elementId = this.postIdToComment;
    console.log('this.formComment', this.formComment);

    this.crudSrv.postComment(this.formComment).subscribe((res) => {
      console.log('ok commento inserito');
    });
  }

  showComments(idPost: string) {
    this.crudSrv.getComment(idPost).subscribe((res) => {
      this.postComments = res;
      console.log('commenti', this.postComments);
    });
  }
}
