import { ModaleComponent } from './../modale/modale.component';
import { IUser } from './../../interfaces/iuser';
import { Component, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  // @ViewChild('fu') form!: NgForm;
  // @ViewChild(NgbModal)
  // form!: NgForm;
  constructor(private crudSrv: CrudService, private modalService: NgbModal) {}
  formData!: IUser;
  user!: IUser;
  allUsers!: IUser[];

  ngOnInit() {
    this.crudSrv.getMeUsers().subscribe((res) => {
      this.user = res;
    });
  }

  open() {
    // console.log('this.user', this.user);

    this.modalService.open(ModaleComponent, {
      ariaLabelledBy: 'modal-basic-title',
    });
  }
}
