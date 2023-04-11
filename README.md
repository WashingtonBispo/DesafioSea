# DesafioSea

Esse projeto foi realizado para o cumprimento do desafio da empresa SEA Tecnologia. O projeto foi realizado utilizando o dotnet, uma vez que é a linguagem em backend que tenho maior experiência em conjunto com React uma vez que é um dos frameworks que são utilizadoss dentro da SEA.

## Ideia de Projeto

História sem graça foi um site que, integrado ao Tumblr, permitia o envio de histórias e a publicação caso fossem aprovadas. Era possível interagir curtindo a história, avaliando se era sem graça e repostando no perfil pessoal do tumblr. Criei uma versão do site através da imagem disponivel no (Way Back Machine)[https://archive.org/web/] e adicionei algumas funcionalidades que não existiam como o login e o perfil de usuário que permite a edição de dados.

### Site antigo
![alt text](https://i.imgur.com/AYywWEm.png)

![alt text](https://i.imgur.com/pVrhgr4.png)

## Prints

### Home Page
![alt text](https://i.imgur.com/cltiUSv.png)

### Tela de Login
![alt text](https://i.imgur.com/HbRDG9Z.png)

### Tela de gerenciamento de perfil
![alt text](https://i.imgur.com/kvsfhvp.png)

## Como rodar 

### Backend 

Para rodar o backend é necessário ter instalado o dotnet 6 na máquina e o Visual Studio Code, então atualizar os arquivos de configuração com as credenciais do banco de dados (Os arquivos appsettings.json no projeto DesafioSAE e o DataContext.cs no projeto DesafioSEA.Data) e rodar as migrations usando o seguinte comando na pasta do projeto DesafioSEA.Data:

```console
foo@bar:~$ dotnet ef database update
```

E então clicar no ícone verde no Visual Studio Code para rodar o projeto.

### FrontEnd

Para rodar o frontend é necessário ter instalado o react e o npm. Dentro da pasta do projeto rodar os seguintes comandos:

```console
foo@bar:~$ npm install
foo@bar:~$ npm start
```
