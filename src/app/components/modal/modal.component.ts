import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() public title = '';
  public ishidden = true;


  public close(): void{
    this.ishidden = true
  }

  public open(): void{
    this.ishidden = false
  }
}
