import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-area',
  templateUrl: './contact-area.component.html',
  styleUrls: ['./contact-area.component.scss']
})
export class ContactAreaComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  sendingMail: boolean = false;
  sendButtonText: string = 'Send Message :)';

  sendMail() {
    console.log('sending mail', this.myForm);
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    let fd = new FormData()
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);

    this.sendingMail = true;
    this.sendButtonText = 'Sending...';

    fetch("https://mustafa-soycan.com/send_mail/send_mail.php", {
      method: 'POST',
      body: fd
    })
      .then(response => {
        if (response.ok) {
          this.sendButtonText = 'Submitted successfully :)';
          this.myForm.nativeElement.reset();
        } else {
          this.sendButtonText = 'Failed to send email';
        }
        this.sendingMail = false;

        nameField.disabled = false;
        emailField.disabled = false;
        messageField.disabled = false;
        sendButton.disabled = false;
      })
      .catch(error => {
        this.sendButtonText = 'Failed to send email :(';
        this.sendingMail = false;

        nameField.disabled = false;
        emailField.disabled = false;
        messageField.disabled = false;
        sendButton.disabled = false;
      });
  }
}