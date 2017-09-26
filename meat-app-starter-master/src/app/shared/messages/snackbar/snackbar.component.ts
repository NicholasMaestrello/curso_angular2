import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
  ]
})
export class SnackbarComponent implements OnInit {

  message:string = 'Hello there'
  constructor() { }

  ngOnInit() {
  }

}
