const products = [
  { id: 'id-1', price: 10 },
  { id: 'id-2', price: 20 },
  { id: 'id-3', price: 30 },
];

export default class Cart {
  constructor(items = []) {
    this._items = items;
  }

  get items() {
    return this._items;
  }

  add(itemId) {
    // const item = this._items.find((i) => i.id == itemId);

    // if (item) {
    //   item.quanity += 1;
    //   return;
    // }

    // item._items.push({ id: itemId, quanity: 1 });

    this._items[itemId] = this._items[itemId] ? this._items[itemId] + 1 : 1;
  }

  remove(itemId) {
    const { [itemId]: _, ...rest } = this._items;
    this._items = rest;
  }

  total(products) {
    const itemIds = Object.keys(this._items);
    const productsInCart = products.filter((p) => itemIds.includes(p.id));
    const productMap = productsInCart.reduce((map, product) => {
      map[product.id] = product.price;
      return map;
    }, {});

    const total = itemIds.reduce(
      (acc, id) => {
        acc += this._items[id] * productMap[id]
        return acc;
},
      0
    );
    return total;
  }
}

const x = [
  { id: 'id-1', quanity: 1 },
  { id: 'id-2', quanity: 2 },
];

const y = {
  'id-1': 1,
  'id-2': 2,
};
