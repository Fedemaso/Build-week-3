import { IExperience } from './../../interfaces/iexperience';
import { Component, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { IUser } from 'src/app/interfaces/iuser';
import { UserInfoComponent } from '../user-info/user-info.component';
import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-esperienza',
  templateUrl: './esperienza.component.html',
  styleUrls: ['./esperienza.component.scss'],
  // standalone: true,
  // imports: [NgbDatepickerModule],
})
export class EsperienzaComponent {
  @ViewChild('f', { static: true }) form!: NgForm;
  constructor(private crudSrv: CrudService, private modalService: NgbModal) {}

  allTheExperiences!: any;
  user!: any;
  addExp: boolean = false;
  formData!: IExperience;
  exp!: any;

  ngOnInit() {
    this.crudSrv.user$.subscribe((res) => {
      this.user = res;
      console.log('RES', this.user);
      this.crudSrv.getAllTheExp(this.user._id).subscribe((res) => {
        this.allTheExperiences = res;
        console.log('Esperienza', this.allTheExperiences);
      });
    });
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

  submit(f: NgForm) {
    this.formData = f.form.value;
    console.log('this Form', this.formData, typeof this.formData);
    this.crudSrv.postExperience(this.formData).subscribe((res) => {
      console.log('NEW exp in expComp:', res);
      this.crudSrv.getAllTheExp(this.user._id).subscribe((res) => {
        this.allTheExperiences = res;
      });
    });
  }
}
