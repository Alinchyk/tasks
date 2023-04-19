const couponData = {
  code: '20CW-2T5V-RNAN',
  value: 15,
  type: '%',
};

const str = 'Use coupon code {{code}} get {{value}} {{type}} off for all';

// 1. Елементы вокруг переменной {{code}} обернуть в тег <span></span>.  Саму же переменную {{code}} обернуть в тег <b></b>
// 2. Заменить переменные {{variables}} подставив соответствующие значения из переменной couponData

console.log(fnA(str)); // "<span>Use coupon code </span><b>20CW-2T5V-RNAN</b><span> get 15 % off for all</span>"
