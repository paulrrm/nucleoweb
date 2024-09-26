import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavVarComponent } from "./component/nav-var/nav-var.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavVarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app001';
}
