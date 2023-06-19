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
  
    const links = mobile_menu.querySelectorAll('a'); // Alle Links im Burger-Menü auswählen
  
    // Funktion zum Schließen des Burger-Menüs
    const closeMenu = function() {
      menu_btn.classList.remove('is-active');
      mobile_menu.classList.remove('is-active');
    };
  
    // Event Listener für den Klick auf den Hamburger-Button
    menu_btn.addEventListener('click', function() {
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
    });
  
    // Event Listener für den Klick auf einen Link im Burger-Menü
    links.forEach(function(link) {
      link.addEventListener('click', closeMenu);
    });
  }
}