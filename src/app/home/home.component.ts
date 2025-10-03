import { Component, signal} from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ParentComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  message = 'Hello World';

}
