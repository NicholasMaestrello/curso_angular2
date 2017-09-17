import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content: String = 'Welcome do Meat App!'

  constructor() { }

  ngOnInit() {
  }

}
