
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { users } from '../test-data/users';

test.describe('Testes de Produtos', () => {

    test('Validar listagem de produtos', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);

        await loginPage.acessarPagina();
        await loginPage.realizarLogin(users.valido.usuario, users.valido.senha);

        const produtos = productsPage.listarProdutos();

        await expect(produtos.first()).toBeVisible();

        await expect(page.locator('.inventory_item_price').first()).toBeVisible();

        await expect(page.getByRole('button', { name: 'Add to cart' }).first()).toBeVisible();

        await produtos.last().scrollIntoViewIfNeeded();

        await expect(produtos.last()).toBeVisible();

        await expect(page.locator('.inventory_item img').last()).toBeVisible();

        await page.screenshot({
            path: test.info().outputPath('listagem-produtos.png'),
            fullPage: true

        });
    });

});
