import { Component, OnInit, Inject } from '@angular/core';
import { faFacebookSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public faFacebook = faFacebookSquare;
  public faWhatsapp = faWhatsappSquare;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  reRoute(route) {
    this.router.navigate([route]);
  }

  goToUrl(route) {
    document.location.href = route;
  }

  number(val: string){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    Swal.fire({
      title: 'Success',
      text: `Whats app number copied`,
      type: 'success',
    });
  }

}
