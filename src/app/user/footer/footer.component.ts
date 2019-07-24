import { Component, OnInit } from '@angular/core';
import { faFacebookSquare,faWhatsappSquare  } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
public faFacebook =faFacebookSquare;
public faWhatsapp =faWhatsappSquare;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  reRoute(route){
    this.router.navigate([route]);
  }

}
