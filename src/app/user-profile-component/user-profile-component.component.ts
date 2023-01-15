import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile-component.component.html',
  styleUrls: ['./user-profile-component.component.css']
})
export class UserProfileComponentComponent implements OnInit {
  user : User = {
    name:"Diallo",
    lastname : "Boubacar",
    profilePictureUrl: "https://ca.slack-edge.com/T7P4CAKAS-U04FX87GQNP-c6f329aefb1e-512"
  }
constructor(){

}
ngOnInit(): void {
  
}
  getFullName(user: User){
    return `${user.name} ${user.lastname}`;
  }
}


class User {
  name?: String;
  lastname?: String;
  profilePictureUrl?: String;
}
