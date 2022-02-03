// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-converter',
//   templateUrl: './converter.component.html',
//   styleUrls: ['./converter.component.css']
// })
// export class ConverterComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  constructor() {}
  amount: number = 1;
  resultMessage: string = 'Miktarı girip çevirin';
  /* Tutarlar buraya girilecek */
  currencies = [
    {
      currencyName: 'Türk Lirası',
      currencyCode: 'TRY',
      factor: 1 / 19,
    },
    {
      currencyName: 'Amerikan Doları',
      currencyCode: 'USD',
      factor: 1,
    },
    {
      currencyName: 'Euro',
      currencyCode: 'EUR',
      factor: 1.15,
    },
    {
      currencyName: 'İngiliz Sterlini',
      currencyCode: 'GBP',
      factor: 1.5,
    },
  ];

  currentCurrency: string = 'TRY';
  targetCurrency: string = 'USD';

  ngOnInit(): void {}

  convertCurrency() {
    if (!isNaN(this.amount)) {
      let currentFactor = this.findCurrencyFactor(this.currentCurrency);
      let targetFactor = this.findCurrencyFactor(this.targetCurrency);

      if (targetFactor != undefined && currentFactor != undefined) {
        let convertedAmount = (
          (this.amount * currentFactor) /
          targetFactor
        ).toFixed(2);
        this.resultMessage = `${this.amount} ${this.currentCurrency} = ${convertedAmount} ${this.targetCurrency} `;
      } else {
        this.resultMessage = 'Aranan para birimi bulunamadı';
      }
    } else {
      this.resultMessage = 'Döviz çevrimi için bir sayı girmelisin';
    }
  }

  findCurrencyFactor(targetCode: string) {
    let foundItem = this.currencies.find(
      (item) => item.currencyCode == targetCode
    );
    if (foundItem) {
      return foundItem.factor;
    } else {
      console.log('Error');
      return undefined;
    }
  }
}
