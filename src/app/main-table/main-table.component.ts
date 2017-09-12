import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersModal } from '../users-modal/users-modal.component';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {
  
  numPeople: number;
  @Input() userArray: string[] = [];

  constructor(public modalService: NgbModal, private userService: UserService) { }

  ngOnInit() {
    this.userService.userArray.subscribe(
      (response) => this.userArray = response
    )
  }

  open() {
    const modalRef = this.modalService.open(UsersModal, {size: "lg"});
    //modalRef.componentInstance.name = 'World';
    //console.log(this.numPeople);
  }

}
