// 1. Елементы вокруг переменной {{code}} обернуть в тег <span></span>.  Саму же переменную {{code}} обернуть в тег <b></b>
// 2. Заменить переменные {{variables}} подставив соответствующие значения из переменной couponData

const couponData = {
  code: '20CW-2T5V-RNAN',
  value: 15,
  type: '%',
};

function fnA(str) {
  str = str
    .replace('{{code}}', `<span><b>${couponData.code}</b></span>`)
    .replace('{{value}}', couponData.value)
    .replace('{{type}}', couponData.type);

  return `<span>${str}</span>`;
}

const str = 'Use coupon code {{code}} get {{value}} {{type}} off for all';

console.log(fnA(str)); // "<span>Use coupon code </span><b>20CW-2T5V-RNAN</b><span> get 15 % off for all</span>"
