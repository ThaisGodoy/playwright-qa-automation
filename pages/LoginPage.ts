
import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    async acessarPagina() {
        await this.page.goto('/');
    }

    async realizarLogin(usuario: string, senha: string) {
        await this.page.locator('#user-name').fill(usuario);
        await this.page.locator('#password').fill(senha);
        await this.page.locator('#login-button').click();
    }
}
