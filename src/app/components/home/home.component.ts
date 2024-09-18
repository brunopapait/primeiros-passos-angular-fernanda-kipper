import { Component } from '@angular/core';
import { FooterModule } from '../footer/footer.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
