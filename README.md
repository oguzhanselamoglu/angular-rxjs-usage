# AngularRxjsUsage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

## RxJs

Rxjs diziler ve veri kaynaklarını abone alunabilir (subcribale) nesnelere dönüştürüp, Rxjs operatorleri ile birlikte farklı nesnelere dönüştürebildiğimiz bir kütüphanedir.

* Asenkron işlemler için var olan kodu observables hale döndürebiliriz
* veri dizisindeki değerleri farklı tiplere dönüştürebiliriz
* veri dizisini filtreleyebiliriz
* veri dizisinde yenilemeler yapabiliriz

## RxJs Operatorleri

Bir kaynaktan gelen veri üzerinde oynamalar yapabilmemizi, dönüşümler yapabilmemizi sağlayan yardımcı methodlardır
Başlıca RxJs operatorleri aşağıdaki gibi, 

| AREA          | OPERATORS           |
| ------------- |:-------------------:|
| Creation      | from, fromEvent, of |
| Combination   | combineLatest, concat, merge, startWith , withLatestFrom, zip|
| Filtering     | debounceTime, distinctUntilChanged, filter, take, takeUntil|
| Transformation     | bufferTime, concatMap, map, mergeMap, scan, switchMap|
| Utility     | tap|
| Multicasting     | share|


## of
Of operator vereceğimiz herhangi bir dizi, değer, fonksiyon veya  strig değeri Observable hale dönüştürür
daha sonrasında subscribe olunabilir.

import { of } from "rxjs";
const values = of("oguzhan", 2, ['a', 'b']);
values.subscribe(data => {
      console.log(data);
});

## Pipe

Observable veri kaynağında gelen veri üzerinde belirli işlemleri yapabilmemizi sağlayan bir boru hattı. subcribe olunmadan önce gelen veri üzerinde oynayabiliriz belirli işlemler yapabiliriz.
İhtiyaca göre kaynaktan gelen veri de filtreleme, dönüştürülme gibi süreçlerden geçebilir.



