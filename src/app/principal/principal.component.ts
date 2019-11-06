import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items = [
    {
      "product": {
        "id": 2321312,
        "name": "Smartphone Apple iPhone 7 128GB",
        "images": [
          "../../assets/imagens/apple_iphone.jpg"
        ],
        "price": {
          "value": 3509.10,
          "installments": 10,
          "installmentValue": 389.90
        }
      }
    },
    {
      "product": {
        "id": 9971,
        "name": "Smart TV Samsung Série 4 UN32J4300AG 32 polegadas LED Plana",
        "images": [
          "../../assets/imagens/tv_samsung.jpg"
        ],
        "price": {
          "value": 1139.90,
          "installments": 10,
          "installmentValue": 134.11
        }
      }
    },
    {
      "product": {
        "id": 6717131,
        "name": "Câmera Digital Canon EOS Rebel T5i 18.0 Megapixels",
        "images": [
          "../../assets/imagens/camera_canon.jpg"
        ],
        "price": {
          "value": 1999.20,
          "installments": 10,
          "installmentValue": 235.20
        }
      }
    },
    {
      "product": {
        "id": 6717132,
        "name": "Lenovo IdeaPad 310 80UH0004BR Intel Core i7-6500U 2.5 GHz 8192 MB 1024 GB",
        "images": [
          "../../assets/imagens/lenovo_notebook.jpg"
        ],
        "price": {
          "value": 2599.00,
          "installments": 10,
          "installmentValue": 259.90
        }
      }
    }
  ];

  itensCarrinho = [];

  total = 0;
  parcial = 0;

  addCarrinho(id) {

    let obj;
    let cont = 0

    this.items.filter(d => { if (d.product.id == id) obj = d });

    this.itensCarrinho.push(obj);

    this.total = this.total + obj.product.price.value;
    this.parcial = this.parcial + obj.product.price.installmentValue;

    console.log(this.total);

    for (let i = 0; i <= this.itensCarrinho.length - 1; i++) {
      console.log(this.itensCarrinho[i].product.price.value)
      if (id == this.itensCarrinho[i].product.id) {

      }
    }
  }

  abrirCarrinho() {
    this.itensCarrinho;
    console.log(this.itensCarrinho)
  }

  deletarItem(id) {
    let arrayAux = []
    let parar = false

    for (let i = 0; i <= this.itensCarrinho.length - 1; i++) {
      if (id != this.itensCarrinho[i].product.id) {
        arrayAux.push(this.itensCarrinho[i])
      } else {
        this.total = this.total - this.itensCarrinho[i].product.price.value
        this.parcial = this.parcial - this.itensCarrinho[i].product.price.installmentValue
      }
    }
    this.itensCarrinho = arrayAux
  }
}