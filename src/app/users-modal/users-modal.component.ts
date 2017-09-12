import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-modal',
  templateUrl: './users-modal.component.html',
  styleUrls: ['./users-modal.component.css']
})
export class UsersModal implements OnInit {

  userName: string;
  userArray: string[] = this.userService.currUserArray;

  constructor(public activeModal: NgbActiveModal, private userService: UserService) { }

  ngOnInit() {
  }

  addNewUser() {
    this.userArray.push(this.userName);
    this.userService.userArray.emit(this.userArray);
    this.userName = '';
  }


}
