import { Component, OnInit } from '@angular/core';

declare const fbq: any; // É necessario declara essa constante.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'exemplo-fbq-pixel';

  ngOnInit() {

    // Chama função para fazer o tracking
    fbq('track', 'Lead', {
      url: 'http://seu-dominio.com.br/view-atual'
    });

  }
}
