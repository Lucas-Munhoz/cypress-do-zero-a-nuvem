# Cypress, do Zero à Nuvem ☁️

Este repositório conta com todos os exercícios desenvolvidos durante o curso **Cypress, do Zero à Nuvem**, ministrado pela **Escola Talking About Testing**.

## O que aprendi

- Como configurar um projeto Cypress do zero
- Como visitar páginas locais e remotas
- Como lidar com os elementos mais comuns encontrados em aplicações web
- Como testar upload de arquivos
- Como realizar as mais diversas verificações de resultados esperados
- Como criar comandos customizados
- Como lidar com links que abrem em outra aba do navegador
- Como rodar testes simulando as dimensões de um dispositivo móvel
- Como resolver os mesmos problemas de diferentes formas, conhecendo a [API do Cypress](https://docs.cypress.io/api/table-of-contents)
- Como criar uma documentação mínima para seu projeto de testes automatizados
- Como executar os testes em um _workflow_ de integração contínua sempre que mudanças ocorrerem no código da aplicação (ou dos testes)
- Como integrar seu _workflow_ de integração contínua com o Cypress Cloud (o serviço de gestão de testes do Cypress na nuvem)

## Pré-Requisitos

É necessário possuir GIT, Node.js e NPM instalados em sua máquina para executar os testes aqui contidos.

Versões utilizadas:
- Git: 2.39.1.windows.1
- Node: v22.11.0
- Npm: 10.9.0

"scripts": {
    "cyo":"cypress open",
    "cyo-mobile": "cypress open --config viewportWidth=410,viewportHeight=860",
    "test": "cypress run",
    "test-mobile": "cypress run --config viewportWidth=410,viewportHeight=860"
  },

## Instalação e Execução dos Testes

Para instalar as dependências, rode o código: `npm install`.

Os testes podem ser executados em visualização de *DESKTOP, MOBILE*. Ambos contando com a opção de serem executados de maneira *HEADLESS*.

### Desktop
Para executar os testes desktop, rode o código: `npm run cyo`.  
Para executar os testes desktop headless, rode o código: `npm run test`

### Mobile
Para executar os testes mobile, rode o código: `npm run cyo-mobile`.  
Para executar os testes mobile headless, rode o código: `npm run test-mobile`

---