import { Observable, Observer, Subscription, of } from 'rxjs';
import { take, catchError } from 'rxjs/operators';

let subscription: Subscription;

const observable = new Observable((subscriber) => {
  subscriber.next('Pen');
  subscriber.next('Notebook');
  subscriber.error(new Error('Oh no, where is my pencil?'));
  subscriber.complete();
});

const observer: Observer<string> = {
  next: (txt: string) => console.log(txt),
  complete: () => console.warn('Emitting is finished'),
  error: (err: Error) => console.error(err.message),
};

subscription = observable
  .pipe(
    take(3),
    catchError((err) => {
      console.warn(`Tap: ${err.message}`);
      return of(err.message);
    })
  )
  .subscribe(observer);
