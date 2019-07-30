import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfigService } from '../../Config/config.service';
import Swal from 'sweetalert2';
import { HttplayerService } from '../../HttpService/httplayer.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public nameControl;
  public name;
  public phone;
  public emailControl;
  public email;
  public message;
  myform: FormGroup;
  constructor(
    private config: ConfigService,
    private httpLayer: HttplayerService,
  ) { }

  ngOnInit() {
    this.formControl();
  }

  formControl() {
    this.nameControl = new FormControl('', Validators.required);
    this.emailControl = new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]+")
    ]);
  }

  validate() {
    if (this.nameControl.status === 'INVALID' || this.emailControl.status === 'INVALID') {
      Swal.fire({
        title: 'Unsuccesfull',
        text: `Name or email is not correct`,
        type: 'error',
      });
    } else {
      const url = `${this.config.API_ENDPOINT}${this.config.API_ENDPOINT_NAMES.contactus}`;
      let body = {
        'name': this.nameControl.value,
        'email': this.emailControl.value,
        'phone': this.phone,
        'message': this.message
      };
      this.httpLayer.post(url, body).subscribe((response) => {
        if (response['status'] === 'success') {
          this.nameControl.setValue('');
          this.emailControl.setValue('');
          this.phone = '';
          this.message = '';
          Swal.fire({
            title: 'Success',
            text: `Thankyou for contacting us, we will get in touch with you as soon as possible`,
            type: 'success',
          });
        } else {
          Swal.fire({
            title: 'Unsuccesfull',
            text: `Please try again`,
            type: 'error',
          });
        }
      });
    }
  }

}
