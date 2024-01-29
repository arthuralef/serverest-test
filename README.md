# Introdução

Bem vindo ao projeto de automação da loja virtual.

Ele foi criado utilizando Cypress, JavaScript, Chance.js.

Total de cenários: 8

Entre algumas de suas funcionalidades, estão:
- Criação de usuário e administrador;
- Verificação de login de usuário e administrador;
- Adição e exclusão de produtos;
- Criação de usuário pelo administrador;
- Adição de itens no carrinho.

## Necessário instalar:
    • GitBash: Sistema que trás as funcionalidades bash (Terminal) para o Windows.
    • Node.JS: Software que permite a execução de códigos JavaScript fora de um navegador web.

## Configurando o ambiente de automação de testes Web

Para que sua automação possa ser realizada é necessário instalar alguns recursos, conforme será descrito abaixo:

## Linux

## 1- Instalação Node.JS

* No terminal, digite o comando de instalação do curl:
```bash
sudo apt-get install curl
```

* Em seguida, execute o script abaixo para adicionar o repositório do Node:
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```

* E por fim, para instalar o Node execute:
```bash
sudo apt-get install -y nodejs
```

## 2- Instalação NPM

* Logo após instalação do Node.JS, no terminal digite o comando:
```bash
sudo apt install npm
```

## Windows

## 1- Instalação GitBash

* Entre no site: https://gitforwindows.org e baixe a versão mais recente do GitBash;
* Após o donwload, execute o instalador.

## 2- Instalação Node.JS

* Entre no site: https://nodejs.org/en/download e baixe a versão mais recente do Node.JS;
* Após o donwload, execute o instalador.

## 3- Instalação NPM

* Logo após instalação do Node.JS, no GitBash digite o comando:
```bash
npm install
```

## Executando
```bash
# Você abre a interface gráfica do Cypress.
npx cypress open

# Execute a automação através da linha de comando.
npx cypress run
```