import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class UserService {
    //userArray: string[] = [];
    @Output() userArray = new EventEmitter<string[]>();
    currUserArray: string[] = [];
}