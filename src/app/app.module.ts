import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MainTableComponent } from './main-table/main-table.component';
import { UsersModal } from './users-modal/users-modal.component';
import { PaymentModal } from './payment-modal/payment-modal.component';

import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    MainTableComponent,
    UsersModal,
    PaymentModal
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [UsersModal, PaymentModal]
})
export class AppModule { }
