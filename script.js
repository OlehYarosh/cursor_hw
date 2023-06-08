const xiaomi = 15.678;
const iphone = 123.936;
const samsung = 90.2345;

console.log("Ціна xiaomi:", xiaomi, "Ціна iphone:", iphone, "Ціна samsung:", samsung)

const max_price = Math.max(xiaomi, iphone, samsung);
console.log("Max price:", max_price)

const min_price = Math.min(xiaomi, iphone, samsung);
console.log("Min price:", min_price)


const price_all_product = xiaomi + iphone + samsung;
console.log("Ціна усіх товарів:", price_all_product)

const floor_xiaomi_iphone = Math.floor(xiaomi) + Math.floor(iphone);
const floor_xiaomi_samsung = Math.floor(xiaomi) + Math.floor(samsung);
const floor_samsung_iphone = Math.floor(samsung) + Math.floor(iphone);
console.log("Округлення xiaomi + iphone:", floor_xiaomi_iphone)
console.log("Округлення xiaomi + samsung:", floor_xiaomi_samsung)
console.log("Округлення samsung + iphone:", floor_samsung_iphone)


const price_all_product_floor = Math.floor(xiaomi) + Math.floor(iphone) + Math.floor(samsung);
const round_price = Math.round(price_all_product_floor / 100) * 100
console.log("Округлення товару до сотень:", round_price)


const boolean = price_all_product_floor % 2 === 0;
console.log("Якщо сума всіх товарів є парна - true, ні - false:",price_all_product_floor, boolean)


const rest = 500 - price_all_product;
console.log("Решта з 500 при оплаті за весь товар:", rest)


const avg_price_all_product = Math.floor((price_all_product / 3) * 100) / 100;
console.log("Середнє значення цін:", avg_price_all_product)



const min = 0
const max = 100;
const price = Math.floor(price_all_product * 100) / 100;
const price_2 = price / 2;
const discount = Math.floor((max - min) * Math.random() + min);
const discount_with_price = Math.round((price * discount) / 100);
const discount_profit = (price / 2) - discount_with_price;

console.log("Ціна товару:", price, "---> Собівартість:", price_2)
console.log("Знижка:", discount, "---> Знижка в сумі:", discount_with_price)
console.log("Чистий прибуток:", discount_profit)

const template_string = 
`Ціна xiaomi ${xiaomi}, Ціна iphone ${iphone}, Ціна samsung ${samsung}, Максимальна ціна ${max_price}, Мінімальна ціна ${min_price}, Ціна усіх товарів: ${price_all_product},
Округлення xiaomi + iphone ${floor_xiaomi_iphone}, Округлення xiaomi + samsung ${floor_xiaomi_samsung},Округлення samsung + iphone ${floor_samsung_iphone}, Чи сума усіх товарів парна ${boolean},
Решта з 500 при оплаті за весь товар ${rest}, Середнє значення цін ${avg_price_all_product}, 
Ціна товару ${price}, Собівартість ${price_2}, Знижка ${discount}, Знижка в сумі від товару ${discount_with_price}, Чистий прибуток ${discount_profit}
`
console.log(template_string)