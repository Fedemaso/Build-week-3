import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IUser } from 'src/app/interfaces/iuser';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.scss'],
})
export class ModaleComponent {
  constructor(private crudSrv: CrudService, private modalService: NgbModal) {}
  @ViewChild('fu') form!: NgForm;
  formData!: IUser;
  isShowMore: boolean = false;
  //modale per edit user

  ngOnInit() {
    this.crudSrv.getMeUsers().subscribe((res) => {
      this.form.control.setValue(res);
      console.log('this.formData', this.form);
      console.log('this.form', this.form);
    });
  }

  editProfile() {}

  //DA FARE
  submit(f: NgForm) {
    this.formData = f.form.value;
    console.log('f', f);

    this.crudSrv.updateUser(this.formData).subscribe((res) => {
      console.log('NEW user data:', res);
    });
  }
}
