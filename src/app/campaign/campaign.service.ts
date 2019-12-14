import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailTemplate } from './template.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  apiURL: string = 'http://dummy.restapiexample.com/api/v1/create';
  apiURL1: string = 'http://localhost:8084/sendMail?';

  constructor(private httpClient: HttpClient) { }

  // getData() {
  //   return this.httpClient.get('$apiURL/sendMail')
  // }

  // postTemplate(template: EmailTemplate) {
  //   return this.httpClient.post(this.apiURL, template);
  // }

  getUsers(template: EmailTemplate) {
    console.log(template)
    this.apiURL1 = this.apiURL1+"emailId="+template.email+"&subject="+template.subject+"&html="+"<html><h1>Hi Guys</h1></html>";
    return this.httpClient.get(this.apiURL1)
  }

  // sendMail(template: EmailTemplate) {
  //   console.log("template")
  //   return this.httpClient.get(this.apiURL)
  // } 
}
