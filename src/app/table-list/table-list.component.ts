import { CampaignService } from './../campaign/campaign.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user.model'

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  users: User[];

  constructor(private apiService: CampaignService) { }

  ngOnInit() {
    this.addDummyUsers()
    // this.apiService.getUsers().subscribe(
    //   res => {
    //     this.users = res["users"];
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // )
  }

  addDummyUsers() {
    let user1 = new User()
    user1.name = "Dakota Rice";
    user1.country = "Niger";
    user1.state = "Oud-Turnhout";
    user1.email = "dakota@gmail.com"
    let user2 = new User()
    user2.name = "Minerva Hooper";
    user2.country = "Curaçao";
    user2.state = "Sinaai-Waas	";
    user2.email = "minerva@gmail.com"
    let user3 = new User()
    user3.name = "Sage Rodriguez";
    user3.country = "Netherlands";
    user3.state = "Baileux";
    user3.email = "sage@gmail.com"
    let user4 = new User()
    user4.name = "Philip Chaney";
    user4.country = "Korea, South	";
    user4.state = "Korea, South	";
    user4.email = "Philip@gmail.com"
    let user5 = new User()
    user5.name = "Doris Greene	";
    user5.country = "Malawi";
    user5.state = "OFeldkirchen in Kärnten	";
    user5.email = "Doris@gmail.com"
    this.users = [user1, user2, user3, user4, user5]
  }



}
