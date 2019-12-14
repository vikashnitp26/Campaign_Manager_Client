import { CampaignService } from './campaign.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'angular-email-editor';
import { EmailTemplate } from './template.model';

export enum CampaignState {
  home,
  create_campaign,
  create_template
}

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css'],
  providers: [CampaignService]
})
export class CampaignComponent implements OnInit {

  campaign = CampaignState
  campaignState: CampaignState = CampaignState.home 
  @ViewChild(EmailEditorComponent, null)
  private emailEditor: EmailEditorComponent;
  url = ""


  // editorLoaded() {
  //   this.emailEditor.loadDesign(sample);
  // }

  constructor(private apiService: CampaignService) { }

  ngOnInit() {
  }

  public stateChanged(state: CampaignState): void {
    console.log(state);
    this.campaignState = state
  }

  compareState(state: CampaignState) {
    console.log(state);
    return this.campaignState == state
  }

  exportHtml() {
    this.emailEditor.exportHtml((data) => {
      console.log('exportHtml', data)
      let emailTemplate = new EmailTemplate()
    emailTemplate.email = "nagarajubasara@gmail.com"
    emailTemplate.subject = "Email campaign"
    emailTemplate.html = data["html"]
    // this.apiService.postTemplate(emailTemplate).subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err => {
    //     console.log(err)
    //     // this.serverErrorHandler(err)
    //   }
    // )

    this.apiService.getUsers(emailTemplate).subscribe(
      res => {
        console.log(res);
      },
      err => {
        // this.serverErrorHandler(err)
      }
    )

    });

   

    // this.apiService.getData().subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err => {
    //     // this.serverErrorHandler(err)
    //   }
    // )
    

  }

}
