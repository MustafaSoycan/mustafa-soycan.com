import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-area',
  templateUrl: './contact-area.component.html',
  styleUrls: ['./contact-area.component.scss']
})
export class ContactAreaComponent {

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  sendMail(){
    // action="https://mustafa-soycan.developerakademie.net/test/send_mail/send_mail.php" 

    console.log('sending mail', this.myForm);
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
   
    nameField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    // Animation anzeigen
    let fd = new FormData()
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    // senden
    fetch("https://mustafa-soycan.developerakademie.net/test/send_mail/send_mail.php",
    {
      method: 'POST',
      body: fd
    }
    );

    // Text anzeigen: Nachricht gesendet!
    nameField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;

  }
}
