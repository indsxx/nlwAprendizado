## Primeira Aula | NLW Together

### Primeiros Comandos com ```yarn```

Comando    |  Função
--------------- | -------------
```yarn init -y ``` | Cria nosso package.json com informações pré-prontas para o nosso projeto
```yarn add typescript -D ``` | Instala uma biblioteca para <strong>rodar o Typescript</strong>, após o comando colocamos o -D para signicar que aquilo é uma biblioteca de desenvolvimento
``` yarn tsc --init ``` | Cria um arquivo chamado ```tsconfig.json```, com configurações pré-prontas para o nosso <strong>Typescript</strong>
``` yarn tsc ``` | o <strong>yarn tsc</strong> cria um arquivo ```.js``` mantendo a tipagem do Typescript de forma que o Node consiga entender
``` yarn add ts-node-dev -D ```| Instala uma biblioteca que converte nosso código <strong>TS</strong> para o Node entender, assim sem prescisar usar infinitos ``` yarn tsc ```, para utilizar esse comando, usamos o ``` yarn dev ```
                 
                 
### Principais metodos do ``` Express ```

#### Para instalar o  <strong>Express</strong> , use o comando: ```yarn add express -D ``` , também é necessario baixar os tipos, para isso use o comando ```yarn add @types/express -D ``` 
  
Método | Função do método
---------------- | ---------------
``` GET ``` | Busca uma informação
``` POST ``` | Inserir (Criar) uma informação
``` PUT ``` | Alterar uma informação
``` DELETE ``` | Remover uma informação(dado)
``` PATCH ``` | Alterar uma informação específica

### Como fazer um ``` GET ``` ?

```ts
import express from "express";

app = express()
app.get("/teste, (request, response) => {
  return response.send("Olá mundo, este é o metodo GET!)
}

// O request, é quando algo entra, já o response, é quando sai!
```

### Como fazer um ``` POST ``` ?

```ts
import express from "express";

app = express()
app.post("/teste-post, (request, response) => {
  return response.send("Olá mundo, este é o metodo POST!)
}
```
#### Mas se nós acessarmos o ``` localhost:3000/teste-post ```, vemos que aparece um erro:

<img src="https://media.discordapp.net/attachments/784050272729169952/857262487421976586/unknown.png?width=882&height=468">

#### Isso porque o <strong>Browser</strong> por padrão, toda requisição que ele recebe são requisições ``` GET ```, mas oque vamos utilizar, para conseguirmos fazer nosso acesso nessa rota via ``` POST ``` ?

<p>Vamos utilizar o <strong>Insomnia</strong>, o Insomnia vai ser o nosso <strong>Client</strong> que vai estar requisitando a nossa rota.</p>

### Como utilizar o Insomnia?

#### Essa é a tela inicial quando acessamos o aplicativo: 

<img src="https://media.discordapp.net/attachments/847095771974598690/857267153531437106/unknown.png?width=886&height=468">

#### Para criar um request, faça isso:

<img src="https://media.giphy.com/media/KfZ3Ts65V1Z2BahJjN/giphy.gif">

#### Depois coloque o link da rota:

<img src="https://media.giphy.com/media/8DRxQmBA7q5ORzMLCe/giphy.gif">

## Segunda Aula | NLW Together

### Tipos de Parâmetros

Tipo | Função do parâmetro
------- | ----------
```Router Params``` | São parâmetros inserido na própria rota, dividido por ```/``` Exemplo: ```http:localhost:3000/produtos/7894271897412847```, são IDs
```Query Params``` | São parâmetros que fazem parte de uma Query, quando nós queremos por exemplo buscar uma coisa e fazer um filtro, Exemplo ```http:localhost:3000/produtos?name="teclado"&description="tecladobom"```, a diferença entre os ```Query Params``` e o ```Router Params```, Quando eu tenho o <strong>Query Params</strong> são parâmetros não obrigatórios, então eu posso tanto receber, como não receber
```Body Params``` | São parâmetros que vão vir no corpo da nossa requisição, Utilizamos para ```POST```, ```PUT``` e quando a gente quer fazer um ```PATH```, não utilizamos no ```GET``` !, Exemplo: ``` {"name": "teclado", "description": "teclado bom"}```

### Banco de Dados

#### Formas de usar Banco de Dados na nossa aplicação!

<p>Uma forma mais mão na massa, é utilizar o próprio driver do nosso <strong>Banco de Dados</strong></p>
<p>Usando <strong>Query Builders</strong>, ele não é tão mão na massa, mas também não é menos código quanto o ORM</p>
<p>O ORM tranforma nosso código, em uma maneira que nosso Banco de Dados consiga entender</p>

#### Para utilizar o ORM vamos usar o comando: ```yarn add typeorm reflect-metadata sqlite3```

Depois, crie um arquivo chamando ```ormconfig.json``` na raiz do projeto e dentro dele coloque as seguintes configurações

```json
{
    "type": "sqlite",
    "database": "src/database/database.sqlite"
}
```

Esse ```"database"``` serve, para quando rodarmos a aplicação, ele criar o o arquivo ```sqlite```

* Crie uma pasta chamada ```database``` para o **ormconfig.json** não dar erro, depois crie um arquivo chamado ```index.ts```, Mais ou menos assim: 

<img src="https://media.discordapp.net/attachments/847095771974598690/857615559776272394/Captura_de_tela_de_2021-06-24_10-37-55.png">

Depois cole esse código:

```ts
import { createConnection } from "typeorm";

createConnection();
```
Esse código vai criar uma conexão, com o Banco de Dados;

Depois disso cole o código a seguir no ```server.ts```

```ts
import "./database"
```
Quando tem o arquivo ```index.ts``` ou ```index.js``` ele já sabe que o arquivo que ele tem que importar é o **index**!

Hora de rodar a aplicação!, para isso vmaos usar o comando ```yarn dev```

Depois de rodarmos:

<img src="https://media.discordapp.net/attachments/847095771974598690/857618255967813632/Captura_de_tela_de_2021-06-24_10-48-19.png">

<p>Ai está!</p>

#### Já configuramos o nosso banco de dados!

### Migrations

<p>Oque são migrations?</p>

Migrations nada mais é do que um controle que a gente tem diversionamente de tabelas dentro da nossa aplicação

#### Agora vamos instalar o Migrations!

Dentro do nosso ```ormconfig.json``` vamos criar um **cli**, mas antes vamos entender oque é um **cli**, o **cli** é uma ferramenta que nos da uma opção de baixar o typeorm de forma global, mas não vamos utilizar o **cli** nativo! Vamos utilizar o cli que está na biblioteca que instalamos 

