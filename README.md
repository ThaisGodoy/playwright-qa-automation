# Automação de Testes E2E com Playwright

Projeto de automação de testes Web desenvolvido com **Playwright e TypeScript**, com o objetivo de validar funcionalidades de uma aplicação de e-commerce.

## Aplicação utilizada

**Sauce Demo (Swag Labs)**

https://www.saucedemo.com/

Aplicação pública utilizada para praticar testes automatizados de funcionalidades de e-commerce.

## Tecnologias utilizadas

- Playwright
- TypeScript
- Node.js
- Git e GitHub

## Estrutura do projeto

```text
playwright-automation/
├── pages/
│   ├── LoginPage.ts
│   └── ProductsPage.ts
├── tests/
│   ├── login.spec.ts
│   └── products.spec.ts
├── test-data/
│   └── users.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
```

## Cenários automatizados

**1. Login com credenciais válidas**
- Acessar a página de login.
- Informar usuário e senha válidos.
- Realizar a autenticação.
- Validar o acesso à aplicação.

**2. Login com credenciais inválidas**
- Acessar a página de login.
- Informar credenciais inválidas.
- Realizar a tentativa de autenticação.
- Validar a mensagem de erro apresentada.

**3. Validação da listagem de produtos**
- Realizar login na aplicação.
- Validar a exibição dos produtos.
- Verificar a visibilidade dos preços e botões de compra.
- Realizar scroll até o último produto.
- Validar a exibição da imagem do produto.
- Capturar screenshot da página.

## Pré-requisitos

- Node.js instalado
- npm
- Git

## Instalação do projeto

**1. Clonar o repositório**

```bash
git clone https://github.com/SEU-USUARIO/playwright-automation.git
```

**2. Acessar a pasta do projeto**

```bash
cd playwright-automation
```

**3. Instalar as dependências**

```bash
npm ci
```

**4. Instalar os navegadores do Playwright**

```bash
npx playwright install
```

## Execução dos testes

**Executar todos os testes:**

```bash
npx playwright test
```

**Executar os testes com o navegador visível:**

```bash
npx playwright test --headed
```

**Executar um arquivo específico:**

```bash
npx playwright test tests/login.spec.ts
```

**Abrir o relatório HTML:**

```bash
npx playwright show-report
```

## Evidências e relatórios

O projeto utiliza os recursos de evidências do Playwright para auxiliar na análise dos resultados dos testes.

- **Screenshots:** capturas de tela durante a execução e em caso de falha.
- **Traces:** registros para investigação de falhas.
- **HTML Report:** relatório com o resultado da execução dos testes.

As evidências são armazenadas no diretório `test-results/`, e o relatório HTML é gerado em `playwright-report/`, conforme a configuração do projeto.

## Organização e boas práticas

- Utilização do padrão Page Object Model (POM).
- Separação dos dados de teste no diretório `test-data`.
- Uso de assertions para validar os comportamentos esperados.
- Reutilização de métodos para interação com a aplicação.
- Organização dos cenários em arquivos de teste.
- Captura de evidências para auxiliar na análise de falhas.
