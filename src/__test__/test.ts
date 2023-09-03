import Cart from "../ts/carts";

test('test1', () => {
    const cart = new Cart();
    cart.add({ id: 12, name: 'phone', price: 12500 });
    cart.add({ id: 13, name: 'phone', price: 12500 })
    cart.add({ id: 14, name: 'phone', price: 12500 })
    const result: number = cart.calcTotal();
    expect(result).toBe(37500);
});

test('test2', () => {
    const cart = new Cart();
    cart.add({ id: 12, name: 'phone', price: 12500 });
    cart.add({ id: 13, name: 'phone', price: 12500 })
    cart.add({ id: 14, name: 'phone', price: 12500 })
    const result: number = cart.calcTotalDiscount(50);
    expect(result).toBe(18750);
});

test('test3', () => {
    const cart = new Cart();
    cart.add({ id: 12, name: 'phone', price: 12500 });
    cart.add({ id: 13, name: 'phone', price: 12500 })
    cart.add({ id: 14, name: 'phone', price: 12500 })
    cart.deleteObj(13);
    const result = cart.items;

    expect(result.length).toBe(2);
})
