'use strict';

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
};

const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1,
};

const cashier = {
    name: 'Mango',
    customerMoney: 0,
    totalPrice: 0,
    change: 0,
    error: null,
    greet() {
        console.log(`Добрый день, вас обслуживает ${this.name}`);
    },
    getCustomerMoney(value) {
        cashier.customerMoney = value; 
    },
    countTotalPrice(allProducts, order) {
        for(const product of Object.keys(order)) {
            this.totalPrice += order[product]*allProducts[product];
        }
    },
    countChange() {
        if(this.customerMoney >= this.totalPrice) {
            this.change = this.customerMoney - this.totalPrice;
        } else {
            this.error = 'Вам не хватает денег на покупки';
        }
    },
    onSuccess() {
        console.log(`Спасибо за покупку, ваша здача ${this.change}!`)
    },
    onError() {
        console.log(this.error);
    },
    reset() {
        this.customerMoney = 0;
        this.totalPrice = 0;
        this.change = 0;
        this.error = null; 
    },
};

// Проверяем исходные значения полей
console.log(cashier.name); // Mango
console.log(cashier.customerMoney); // 0
console.log(cashier.totalPrice); // 0
console.log(cashier.change); // 0
console.log(cashier.error); // null

cashier.greet(); // Добрый день, вас обслуживает Mango

// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая products - список всех продуктов и order - список покупок клиента
cashier.countTotalPrice(products, order);

// Проверяем что посчитали
console.log(cashier.totalPrice); // 110

// Вызываем getCustomerMoney для запроса денег клиента
cashier.getCustomerMoney(300);

// Проверяем что в поле с деньгами клиента
console.log(cashier.customerMoney); // 300

// Вызываем countChange для подсчета сдачи
cashier.countChange();

// Проверяем что нам вернул countChange
console.log(cashier.change); // 190

// Проверяем результат подсчета денег
if(cashier.error === null) {
    // При успешном обслуживании вызываем метод onError
    cashier.onSuccess();
} else {
    // При неудачном обслуживании вызываем метод onError
    cashier.onError(); // Очень жаль, вам не хватает денег на покупку
}

// Вызываем reset при любом исходе обслуживания
cashier.reset();

// Проверяем значения после reset
console.log(cashier.customerMoney); // 0
console.log(cashier.totalPrice); // 0
console.log(cashier.change); // 0
console.log(cashier.error); // null