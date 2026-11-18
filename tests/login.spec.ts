
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test-data/users';

test.describe('Testes de Login', () => {

    test('Login com sucesso', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.acessarPagina();
        await loginPage.realizarLogin(users.valido.usuario, users.valido.senha);

        await expect(page).toHaveURL(/inventory.html/);

        await page.screenshot({ path: 'login-sucesso.png' });
    });

    test('Login com senha inválida', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.acessarPagina();
        await loginPage.realizarLogin(users.invalido.usuario, users.invalido.senha);

        await expect(page.locator('[data-test="error"]'))
            .toHaveText('Epic sadface: Username and password do not match any user in this service');

         await page.screenshot({ path: 'login-sem-sucesso.png' });
    });

});
