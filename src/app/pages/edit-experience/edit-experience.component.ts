import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IExperience } from 'src/app/interfaces/iexperience';
import { CrudService } from 'src/app/services/crud.service';
import { HttpParams } from '@angular/common/http';
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
  expId: any = this.router.url;

  ngOnInit() {
    console.log('expId', this.expId.slice(-24));
  }

  submit(f: NgForm) {
    this.formData = f.form.value;
    console.log('this Form', this.formData, typeof this.formData);
    // this.crudSrv.editExperience(this.formData).subscribe((res) => {
    //   console.log('NEW exp in expComp:', res);
    // });
  }
}
