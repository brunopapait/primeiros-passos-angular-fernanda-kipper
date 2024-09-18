import { Component } from '@angular/core';
import { FooterModule } from '../footer/footer.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HelloWorldService } from '../../services/hello-world.service';
import { firstValueFrom } from 'rxjs';

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

  lista: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  constructor(private helloWorldService: HelloWorldService) { }

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

  async http() {
    const response = await firstValueFrom(this.helloWorldService.getHelloWorld());
    // .then(async (response) =>
    //   await response.subscribe((data) => {
    //     console.log(data);
    //     data = data;
    //   })
    // )
    // .catch((error) => console.error(error));
    console.log(response);
    console.log('asdasd');
  }

  async multiplesHttp() {
    try {
      // Converte cada Observable para Promise
      const promise1 = firstValueFrom(this.helloWorldService.getHelloWorld1());
      const promise2 = firstValueFrom(this.helloWorldService.getHelloWorld2());
      const promise3 = firstValueFrom(this.helloWorldService.getHelloWorld3());

      // Aguarda todas as promessas serem resolvidas
      const [result1, result2, result3] = await Promise.all([promise1, promise2, promise3]);

      // Manipula os resultados
      console.log('Resultado 1:', result1);
      console.log('Resultado 2:', result2);
      console.log('Resultado 3:', result3);
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    }

    console.log('Todas as requisições foram concluídas');
  }
}
