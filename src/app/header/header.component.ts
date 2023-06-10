import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
    const menu_btn = document.querySelector('.hamburger') as HTMLElement;
    const mobile_menu = document.querySelector('.mobile-nav') as HTMLElement;
    menu_btn.addEventListener('click', function(){
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
    });
  }
}