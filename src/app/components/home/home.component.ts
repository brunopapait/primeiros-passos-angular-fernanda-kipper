import { Component } from '@angular/core';
import { FooterModule } from '../footer/footer.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterModule, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name: string = 'Bruno Papait';
  counter: number = 0;
  urlDog: string = 'https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg';
  inputValue: string = '';

  logs() {
    this.name = `${this.name} - ${this.counter++}`;
  }

  changeName() {
    this.name = 'Bruno Papait - ' + new Date().toLocaleString();
  }

  capturarValorInput(event: Event) {
    console.log(event);

    const inputElement = event.target as HTMLInputElement;
    if (!inputElement.value) {
      this.inputValue = 'Valor não informado'
    }

    this.inputValue = inputElement.value;
    this.name = this.inputValue;
  }
}
