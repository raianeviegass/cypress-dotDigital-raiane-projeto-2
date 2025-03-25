
# Projeto de Testes Automáticos | Cypress Dot Digital Raiane-Projeto-2

Neste projeto eu utilizei o **Cypress** para automatizar os testes de uma aplicação web de MarketPlace, com foco na criação de **comandos personalizados**. O objetivo de utilizá-los foi tornar os testes mais reutilizáveis.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Clone do repositório para o ambiente local](#clone-do-repositorio-para-o-ambiente-local)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Comandos Personalizados](#comandos-personalizados)
- [Configuração](#configuração)
- [Rodando os Testes localmente](#rodando-os-testes-localmente)
- [Rodando os Testes na Pipeline do Github](#rodando-os-testes-na-pipeline-do-github)
- [Acessando o Relatório de Testes gerado](#acessando-o-relatório-de-testes-gerado)

## Pré-requisitos

Antes de começar, é necessário ter o **Node.js** e o **Cypress** instalados. Para instalar o Cypress, siga os passos abaixo:

1. Instale o [Node.js](https://nodejs.org/).
2. Instale o Cypress utilizando o seguinte comando pelo terminal:

   ```bash
   npm install cypress --save-dev
   ```

## Clone do repositório para o ambiente local

1. Clone este repositório para sua máquina local

   ```bash
   git clone https://github.com/raianeviegass/cypress-dotDigital-raiane-projeto-2
   ```
2. Instale as dependências utilizando o seguinte comando pelo terminal:
   ```bash
   npm install
   ```

## Estrutura do Projeto

```bash
/cypress
  /e2e
    - buscarProduto.cy.js   # Arquivo de teste
  /support
    - commands.js           # Arquivo onde os comandos personalizados estão definidos
    - e2e.js                # Arquivo principal do Cypress, onde comandos são carregados
/cypress.config.json        # Arquivo de configuração do Cypress
/package.json               # Dependências e scripts do projeto
```

## Comandos Personalizados

Logo abaixo você verá um exemplo de comando personalizado utilizado nesse projeto:

```javascript
Cypress.Commands.add('buscarProdutoComLupa', (produto) => {
    cy.get('.home').should('be.visible')
    cy.get('.nav-search-input')
        .focus()
        .should('be.visible')
        .type(produto)
    cy.get('button[type="submit"]')
        .should('be.visible')
        .click()
})
```

## Configuração

O Cypress é configurado através do arquivo `cypress.config.json`, veja um exemplo de configuração que está sendo utilizado neste projeto:

```json
{
    "baseUrl": "https://www.mercadolivre.com.br/",
    "viewportWidth": 1280,
    "viewportHeight": 720,
    "video": false,
    "retries": 1,
    "screenshotsFolder": "./reports/screenshots"
}
```

## Configuração de geração de Relatório dos Testes

Foi adicionado a este projeto uma geração automática de relatórios dos testes usando **Mochawesome**, e ele é gerado no final de toda a execução.
Esta configuração é feita no arquivo `cypress.config.json`, conforme exemplo abaixo:

```json
{
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "./reports",
    "reportFilename": "relatorio-final-testes",
    "overwrite": true,
    "html": true,
    "json": true
  }
}
```

## Rodando os Testes localmente

Você pode rodar os testes de duas formas:

1. **Modo Interativo** (com a interface gráfica do Cypress):  
   ```bash
   npx cypress open
   ```
2. **Modo Headless** (sem interface gráfica):  
   ```bash
   npm run test
   ```

## Rodando os Testes na Pipeline do Github

Foi criado o arquivo `cypress.yml` para configuração da pipeline de execução automática dos testes desse projeto no Github Actions.
Abaixo você verá a configuração básica padrão que dispara a execução deles na nuvem a cada push que é realizado no projeto:

```yml
on:
  push:
    branches:
      - master
  pull_request:
    branches:
      - master
```

## Acessando o Relatório de Testes gerado

 **Modo local**:  
   1. Rode os testes localmente conforme orientações na sessão - [Rodando os Testes localmente](#rodando-os-testes-localmente)   
   2. Após a execução dos testes, um repositório nomeado como `reports` será gerado
   3. Acesse esse diretório e clique com botão direito do mouse no arquivo `relatorio-final-testes.html`
   4. Selecione a opção de `Reveal in File Explorer`
   5. Dê um duplo clique no arquivo `relatorio-final-testes.html` para que ele seja aberto pelo navegador padrão do seu computador

 **Modo Pipeline** (Execuções já realizadas):  
   1. Dentro do repositório desse projeto no Github, acesse o menu `Actions`
   2. Selecione a última execução dos testes desse workflow
   3. Na sessão de Artifacts, clique em `Relatório dos testes` e um arquivo zipado desse relatório será baixado para seu computador
   4. Acesse o local onde foi feito o download do relatório e descompacte a pasta zipada
   5. Dê um duplo clique no arquivo `relatorio-final-testes.html` para que ele seja aberto pelo navegador padrão do seu computador

 **Modo Pipeline** (Novas execuções):
    Conforme informado na sessão - [Rodando os Testes na Pipeline do Github](#rodando-os-testes-na-pipeline-do-github), basta realizar um push para o projeto (após cloná-lo para seu ambiente local, confome orientado na sessão - [Clone do repositório para o ambiente local](#clone-do-repositorio-para-o-ambiente-local)) e acessar a execução da pipeline de testes seguindo os passos informados no passo **Modo Pipeline** (Execuções já realizadas).