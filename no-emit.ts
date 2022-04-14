import { Observable } from 'rxjs';
console.log('NO EMITS');
const observable = new Observable((subscriber) => {});

observable.subscribe((value) => console.log(value));
