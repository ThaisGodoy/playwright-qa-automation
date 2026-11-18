
import { Page } from '@playwright/test';

export class ProductsPage {
    constructor(private page: Page) {}

    listarProdutos() {
        return this.page.locator('.inventory_item');
    }
}
