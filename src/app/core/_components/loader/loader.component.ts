import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from './loader.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-loader,[app-loader]',
  templateUrl: './loader.component.html'
})
export class LoaderComponent implements OnInit, OnDestroy {
  isLoading: Observable<boolean>;
  counter: number;
  subscription: Subscription;
  show: boolean;

  constructor(public loaderService: LoaderService) {
      this.isLoading = loaderService.isLoading();
      this.counter = 0;
      this.show = false;
  }

  ngOnInit() {
      this.subscription = this.isLoading.subscribe((state: boolean) => {
          state === true ? this.incrementLoader() : this.decrementLoader();
          if (this.counter < 0) {
              this.counter = 0;
          }
          if (this.counter === 0) {
            this.show = false;
          } else {
              this.show = true;
          }
      });
  }

  decrementLoader() {
      this.counter--;
  }

  incrementLoader() {
      this.counter++;
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}

