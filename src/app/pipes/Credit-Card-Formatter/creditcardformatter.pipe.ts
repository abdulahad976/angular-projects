import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcardformatter',
  standalone: true
})
export class CreditcardformatterPipe implements PipeTransform {

  public transform(cardNumber: string): string {
    if(this.hasCorrectLength(cardNumber)) {
      if(this.isNumericString(cardNumber)) {
        return this.formatCardNumber(cardNumber)
      }
      return "Characters is not Allowed : " + cardNumber;

  }
  return 'Invalid Card Length';
}

  

  private hasCorrectLength(cardNumber: string): boolean {
    const cardNumberLength = cardNumber.length;
    const isMasterDiscoverVisaCardLength = 16;
    const isAmericanExpressCardLength = 15


    if (cardNumberLength === isMasterDiscoverVisaCardLength || cardNumberLength === isAmericanExpressCardLength) {
      return true;
    }

    return false;
    }


    private isNumericString(input: string): boolean{
      const numericRegex = /^[0-9]+$/;

      return numericRegex.test(input);
    }
    
    private formatCardNumber(cardNumber: string): string {
      const parts = cardNumber.match(/[\s\S]{1,4}/g);
      return parts!.join('-');
    }

  }
