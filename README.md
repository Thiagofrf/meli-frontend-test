<h1 align="center"> Mercado Livre Teste Prático - FrontEnd </h1>

<p align="center">A aplicação é composta por três aplicações principais: barra de pesquisa, visualização de resultados
e a descrição do detalhe do produto.
</p>

<p align="center">
  <a href="#-tecnologias">Techs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-documentação">Documentação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-usar">Rodar o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">License</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

<p align="center">
  <img src="https://github.com/Thiagofrf/meli-frontend-test/assets/50845684/6bce04b7-1877-4aef-8394-46aef220abbe" alt="project preview" />
  <img src="https://github.com/Thiagofrf/meli-frontend-test/assets/50845684/43603c95-7f00-4249-aef7-b66d3ed5562c" alt="project preview" />
  <img src="https://github.com/Thiagofrf/meli-frontend-test/assets/50845684/43a6d257-8e22-4c3b-a3d6-59722a576521" alt="project preview" />
</p>

## Techs

Esse projeto foi construído utilizando as seguintes tecnologias:

- HTML
- Scss
- Typescript
- Reactjs
- NPM
- Axios
  

## Projeto

Teste prático para aspirantes à área de front-end do Mercado Livre. <br/>
A aplicação é composta por três aplicações principais: barra de pesquisa, visualização de resultados
e a descrição do detalhe do produto.
<br/>
<br/>
## Descrição funcional da aplicação <br/>
● Na visão da barra de pesquisa, deve-se poder acessar o produto procurado e, ao enviar o
formulário, navegar até a visão de pesquisa, visualizando somente 4 produtos. Depois, ao
clicar sobre um deles, deve-se navegar até a visão de detalhe do produto. <br/>
● Dado o ID de um produto, deve-se poder acessar diretamente a visão do detalhe do produto.
<br/>

# Documentação 
  ## Estrutura de pastas 
  ![image](https://github.com/Thiagofrf/upload-ai-web/assets/50845684/8ce48cd9-def9-46be-b301-12d675381529)
  <br/>

  Duas pastas principais, para separar o cliente (componentes e páginas frontend) do servidor (rotas e chamadas de API) 
  <br/>
  <br/>
  Pasta Client 
    <br/>
    ![image](https://github.com/Thiagofrf/upload-ai-web/assets/50845684/3145e2cc-6463-43f1-858b-7c275e19d6b5)
    <br/>
    Na assets, estão armazenadas todas as imagens utilizadas no projeto. <br/>
    Na pasta components, temos todos os componentes utilizados dentro das páginas. 
    <br/>
    ![image](https://github.com/Thiagofrf/upload-ai-web/assets/50845684/467138d9-4c07-44af-96c2-346f0d67b2fa)
    <br/>
    Dentro da pasta do componente, temos o arquivo TypeScript e o arquivo de estilo Scss. <br />
    Além disso, como temos muitos componentes de Produto, armazenei todos dentro de uma pasta ProductComponents, para facilitar a legibilidade e escalabilidade do código. <br/> <br/>
    ![image](https://github.com/Thiagofrf/upload-ai-web/assets/50845684/ccbcae12-c461-4799-8a55-0846c81aa935) <br/>
    Na pasta pages, temos as três páginas do projeto, Home, Search e Product. Com a criação de novas rotas e aumento do projeto, toda página nova deve ser adicionada nessa pasta. Dentro dela, adicionamos os componentes previamente citados. <br/> <br/>
    ![image](https://github.com/Thiagofrf/upload-ai-web/assets/50845684/ce44c71b-6c1c-4fb8-95a1-8df63a002706)<br/>
    Criei uma pasta style para importar os arquivos de regra scss. <br/>
    Dentro de utilities, temos as regras de variáveis, a fim de evitar a declaração repetida da mesma cor no CSS, e ter melhor organização. <br/>
    Também dentro de utilities, temos o arquivo de mixins, para definir um trecho de código que é repetido muitas vezes dentro do nosso projeto e aprimorar as chamadas e organização dos estilos. <br/> <br/> <br/>

  Pasta Server <br/>
  ![image](https://github.com/Thiagofrf/upload-ai-web/assets/50845684/ca9daae0-b1a3-4b12-bfc3-390ee012c348)
  <br/>
  ![image](https://github.com/Thiagofrf/upload-ai-web/assets/50845684/bdf848b9-9ef5-445c-a803-2928d2cdf88b) <br/>
  Na pasta routes, temos as duas declarações de chamadas de API que precisamos para o projeto. <br/>
  Na rota products, definimos a rota, o contexto, as regras e o retorno da API de produto. <br/>
  Na rota search, definimos a rota, o contexto, as regras e o retorno da API de busca. <br/> <br/>


# Rodar o projeto

Primeiro, clone este repositório para sua máquina.  <br/>
Após clonar esse repositório para sua máquina, precisamos fazer alguns passos para que o projeto funcione corretamente: <br/> <br/>
## 1° Passo <br/>
  Abra o projeto no VS Code ou no editor de texto da sua preferência <br/>
## 2° Passo <br/>
  Abra um terminal dentro do repositório e entre na pasta server, rodando o comando: cd server <br />
  Após entrar na pasta, precisamos instalar as dependências do projeto. Rode o comando npm install e aguarde a instalação. <br/>
## 3° Passo 
  Após finalizar a instalação das dependências do server, podemos colocá-lo para rodar. <br/>
  Rode o comando npm start <br/>
  O servidor irá rodar com nodemom e ficará observando qualquer mudança ou chamada. <br/>
## 4° Passo 
  Agora, precisamos instalar as dependências do nosso client. <br/>
  Deixe o terminal do server rodando, e abra um novo terminal <br/>
  Rode o comando cd client para entrar na pasta client do nosso projeto <br/>
  Após entrar na pasta, precisamos instalar as dependências do projeto. Rode o comando npm install e aguarde a instalação. <br/>
## 5° Passo
  Após finalizar a instalação das dependências do client, podemos colocá-lo para rodar. <br/>
  Rode o comando npm start <br/>
  O React irá buildar o projeto em um localhost e abrirá a página no navegador. <br/>



## License

This project is under MIT license.

---

Made with ♥ by
<a href="https://linkedin.com/in/thiagofontanella">Thiago Fontanella</a>

