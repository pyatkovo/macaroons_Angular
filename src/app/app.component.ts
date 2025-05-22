import {Component} from '@angular/core';
import {AdvantageType, ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'macaroons';

  public present = true; //для отображения подарка

  public advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ]
  public products: ProductType[] = [
    {
      image: '1.png',
      title: 'Макарун с малиной',
      price: '1,70 руб.',
    },
    {
      image: '2.png',
      title: 'Макарун с манго',
      price: '2,10 руб.',
    },
    {
      image: '3.png',
      title: 'Пирог с ванилью',
      price: '3,70 руб.',
    },
    {
      image: '4.png',
      title: 'Пирог с фисташками',
      price: '2,80 руб.',
    }
  ];


  public formValues = {
    productTitle: '',
    name: '',
    phone: '',
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'})
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    console.log(product.title);
    this.formValues.productTitle = product.title.toUpperCase()
  }

  public createOrder(){
    if (!this.formValues.productTitle) {
      alert('Выберите десерт');
      return
    }
    if (!this.formValues.name) {
      alert('Заполните Имя');
      return
    }
    if (!this.formValues.phone) {
      alert('Заполните номер телефона');
      return
    }
    if (this.formValues.productTitle || this.formValues.name || this.formValues.phone) {
      this.formValues ={
        productTitle: '',
        name: '',
        phone: '',
      }
      alert('Cпасибо за заказ!');
    }
  }


}
