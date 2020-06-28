import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  model: any = {};


  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
  console.log('Registered');
  this.authService.register(this.model).subscribe(next => {
    console.log('Registered Succesfully');
  }, error => {
    console.log('Error');
  });
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('Cancel Register');
  }
}
