import { Directive, Output, EventEmitter, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Directive({
  selector: '[appDebounceClick]',
  standalone: true
})
export class DebounceClickDirective  implements OnInit, OnDestroy {
  @Output() public debounceClick = new EventEmitter();
  public clicks = new Subject();
  public subscription : Subscription = new Subscription();

  public ngOnInit(): void {
    const debounceTimeinMs = 500

    this.subscription = this.clicks.pipe(
      debounceTime(debounceTimeinMs)
    ).subscribe((value: any) => this.debounceClick.emit(value));
  };

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  public clickEvent(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }
}
