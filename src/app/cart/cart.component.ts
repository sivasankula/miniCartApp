import { Component, OnInit } from '@angular/core';
import { AppServService } from '../app-serv.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartDetails:any
  item1:any
  item2:any

  cartItem1Count:number = 0
  cartItem2Count:number = 0
  constructor(public appServ:AppServService) { }

  ngOnInit(): void {
    this.appServ.getCartDetails().subscribe((res) => {
      console.log(res.products)
      this.cartDetails = res.products
      this.item1 = res.products[0]
      this.item2 = res.products[1]
    })
  }

  getTotal(){
    if(this.item1?.price && this.item2.price){
      return this.item1.currency +((JSON.parse(this.item1?.price) * this.cartItem1Count) + (JSON.parse(this.item2?.price) * this.cartItem2Count))
    }
    return null
  }
  
  addItem1(){
    this.cartItem1Count += 1
  }
  removeItem1(){
    if(this.cartItem1Count>0){
      this.cartItem1Count -= 1
    }
   
  }
  removeItem2(){
    if(this.cartItem2Count>0){
      this.cartItem2Count -= 1
    }
  }

  addItem2(){
    this.cartItem2Count += 1
  }

  deleteItem1(){
    this.cartItem1Count = 0
  }
  deleteItme2(){
    this.cartItem2Count = 0
  }

 

}
