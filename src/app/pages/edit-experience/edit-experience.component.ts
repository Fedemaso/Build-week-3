import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IExperience } from 'src/app/interfaces/iexperience';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.scss'],
})
export class EditExperienceComponent {
  @ViewChild('f', { static: true }) form!: NgForm;
  constructor(private crudSrv: CrudService, private router: Router) {}
  formData!: IExperience;
  user!: any;
  expId: string = this.router.url.slice(-24);

  ngOnInit() {
    // console.log('expId', this.expId);
    this.crudSrv.getSingleExp(this.expId).subscribe((res) => {
      // console.log('res', res);
      // console.log('this.form', this.form);
      res.startDate = res.startDate.slice(0, 10);
      res.endDate = res.endDate!.slice(0, 10);
      this.form.control.setValue(res);
    });
  }

  delete() {
    this.crudSrv.deleteExperience(this.expId).subscribe((res) => {
      console.log('ok esperienza eliminata');
    });
    this.router.navigate(['user']);
  }

  submit(f: NgForm) {
    this.formData = f.form.value;
    // console.log('this Form', this.formData, typeof this.formData);
    this.crudSrv
      .updateExperience(this.formData, this.expId)
      .subscribe((res) => {
        console.log('NEW exp in expComp:', res);
      });
  }
}
