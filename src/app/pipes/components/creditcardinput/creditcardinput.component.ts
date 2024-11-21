import { CommonModule, NgSwitch } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-creditcardinput',
  standalone: true,
  imports: [FormsModule, NgSwitch, NgSwitch, CommonModule],
  templateUrl: './creditcardinput.component.html',
  styleUrl: './creditcardinput.component.scss'
})
export class CreditcardinputComponent {

  @Input() public creditCardNumber = '';
  public readOnly = false;
  public get isReadOnly(){
    return this.readOnly;
  }
  @Input() public set isReadOnly(value: boolean) {
    if(this.creditCardNumber.length === 16){
      this.creditCardNumber = value ?  this.formatReadOnlyCCNum(this.creditCardNumber) : this.creditCardNumber;
      this.readOnly = value
    }
 
   
  }


  private formatReadOnlyCCNum(ccNum: string): string {
    const parts = ccNum.match(/[\s\S]{1,4}/g) || [];
    const onlyLast4Shown = parts.map((parts,index) =>{
      if(index === parts.length - 1) {
        return parts;
      }
      return 'xxxx';
    })
    return onlyLast4Shown.join('-');
  }

}
