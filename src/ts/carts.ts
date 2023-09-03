import Buyable from "./buyable";
export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    calcTotal(): number {
        return this._items.reduce((acc, value) => acc + value.price, 0);
    }

    calcTotalDiscount(discount: number): number {
        return this.calcTotal() * (1 - discount / 100);
    }

    deleteObj(id: number): void {
        const idIndex = this._items.findIndex((item) => item.id === id);
        if (idIndex >= 0) {
            this._items.splice(idIndex, 1);
        }
    }
}