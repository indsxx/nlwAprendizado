## Primeira Aula | NLW Together

### Primeiros Comandos com yarn

Comando    |  Função
--------------- | -------------
```yarn init -y ``` | Cria nosso package.json com informações pré-prontas para o nosso projeto
```yarn add typescript -D ``` | Instala uma biblioteca para <strong>rodar o Typescript</strong>, após o comando colocamos o -D para signicar que aquilo é uma biblioteca de desenvolvimento
``` yarn tsc --init ``` | Cria um arquivo chamado ```tsconfig.json```, com configurações pré-prontas para o nosso <strong>Typescript</strong>
``` yarn tsc ``` | o <strong>yarn tsc</strong> cria um arquivo ```.js``` mantendo a tipagem do Typescript de forma que o Node consigo entender
``` yarn add ts-node-dev -D ```| Instala uma biblioteca que converte nosso código <strong>TS</strong> para o Node entender, assim sem prescisar usar infinitos ``` yarn tsc ```, para utilizar esse comando, usamos o ``` yarn dev ```
                 
                 
                 
  
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
  return response.send("Olá mundo, este é o metodo POST!)
}

// O request, é quando algo entra, já o response, é quando sai!
```

### Como fazer um ``` POST ``` ?

```ts
import express from "express";

app = express()
app.get("/teste-post, (request, response) => {
  return response.send("Olá mundo, este é o metodo POST!)
}
```
#### Mas se nós acessarmos o ``` localhost:3000/teste-post ```, vemos que aparece um erro:

<img src="https://media.discordapp.net/attachments/784050272729169952/857262487421976586/unknown.png?width=882&height=468">

#### Isso porque o <strong>Browser</strong> por padrão, toda requisição que ele recebe são requisições ``` GET ```, mas oque vamos utilizar, para conseguirmos fazer nosso acesso nessa rota via ``` POST ``` ?

<p>Vamos utilizar o <strong>Insomnia</strong>, o Insomnia vai ser o nosso <strong>Client</strong> que vai estar requisitando a nossa rota.</p>
