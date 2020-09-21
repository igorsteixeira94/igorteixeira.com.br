---
title: 5 features do JavaScript
description: Minhas 5 features preferidas do JavaScript
category: JS
background: "#eed604"
date: 2020-09-20 11:45:29
thumbnail: /assets/img/js.jpg
---
# Minhas 5 features preferidas do JavaScript

![JavaScript](/assets/img/js.jpg)

Todo o ano o ECMASCRIPT lança especificações novas para linguagem JavaScript, já estamos na edição ES11 ou ES2020 e a cada especificação a linguagem fica muito mais produtiva e consistente. Separei 5 features que mais uso no dia-a-dia.

<ol>
	<li><a href="#operador-exponencial">Operador Exponencial</li>
</ol>

## Optional Chaining

Imagine que você tem um objeto que veio da sua api no formato JSON. E temos nosso componente App para renderizar esse cliente, com todas as suas informações:

```javascript
import React from 'react';

function App() {
    //Formato do nosso objeto cliente
  const cliente = {
    nome: 'Igor Rodrigues',
    idade: 26,
    endereco: {
        rua: 'Rua a',
        bairro: 'Bairro B'
    }
}
  return (
    <div className="App">
      <header className="cliente">
        <strong>{cliente.nome}</strong> <br/>
        <strong>{cliente.idade}</strong><br/>
        <strong>
          <span>{cliente.endereco.rua}</span><br/>
          <span>{cliente.endereco.bairro}</span><br/>
        </strong>
        
      </header>
    </div>
  );
}

export default App;
```

Agora imagine que a propriedade endereço é opcional e ele não veio na api. Poderíamos fazer o seguinte:

```javascript
// ***
{
cliente.endereco && 
  (
    <strong>
      <span>{cliente.endereco.rua}</span> 
      <span>{cliente.endereco.bairro}</span>
    </strong>
  )
}
/*Continuação do código*/
```

E se existir somente a rua ? E se tiver somente o bairro ? Teríamos que verificar propriedade por propriedade antes de renderizar. Teríamos um código muito verboso, agora veremos a solução com o operador optional chaining `?.` 

```javascript
// ***
<strong>
	<span>{cliente?.endereco?.rua}</span><br/>
	<span>{cliente?.endereco?.bairro}</span><br/>
</strong>
/*Continuação do código*/
```

O resultado é um código menos verboso, realmente uma feature muito poderosa para nosso dia-a-dia ! 

<h2 id="#operador-exponencial"> Operador Exponencial</h2>

Essa pode parecer besteira, mas as únicas maneiras de  fazer exponenciação no JavaScript era através da Math.pow ou usando uma função recursiva ! Agora com o operador exponencial `**`, tudo fica mais simples:

```javascript
// ---- Vamos calcular 5² => 5 * 5 = 25
//Antes do operador :
const resultado = Math.pow(5,2); //primeiro a base depois o expoente.

//----Agora

const resultado = 5 ** 2; //primeiro a base depois o expoente.

//Também podemos usar:
let valor = 5;
valor **=2; 
// ele pega o valor que já existe na variavél e aplica o expoente 2.
```

## Template Literal

Quem já programou em C sabe como é complicado " dá um print" com textos, variáveis ou operações aritméticas. Com o template literal do JavaScript tudo fica muito mais simples, essa eu uso em todo o projeto ! 

Também é usada pelo GraphQL e Styled Components eles usam uma variação do template literal (Tagged Template Strings). 

```javascript
const nome = 'Igor Rodrigues';

const idade  = 26;

//A notação utiliza crases ``e para imprimir variavéis ${variável}

console.log(`Meu nome é ${nome}, tenho ${idade} anos.`);

//Podemos utilizar operações dentro dos templates literais.

console.log(`Em 2030 eu terei ${idade + 10} anos`);
```

## Desestruturação

Essa aqui eu sou apaixonado ! A desestruturação basicamente nos permite extrair dados de arrays ou objetos em variáveis distintas. Vamos ao exemplo: 

```javascript
//Temos o objeto abaixo e precisamos do login do usuário que é o email.

const perfil = {
  nome: 'Joaozinhho',
  email:'joaozinhoquebracodigo@mail.com',
  password: '123'
}

//Por meio da desestruturação: 
const {email} = perfil;

console.log(email); //joaozinhoquebracodigo@mail.com

const {email:login} = perfil; 
// Aqui estamos usando a desestruturação para pegar a propriedade email
//e aproveitamos para renomear a variável para login.

console.log(email); //ReferenceError: email is not defined
console.log(login); //joaozinhoquebracodigo@mail.com
```

Agora vamos usar a desestruturação em arrays ! 

```javascript
const nomes = ['Joao', 'Maria', 'Carlos', 'Leticia', 'Ana'];

// Se quisermos recuperar o segundo nome usando desestruturação : 
const [,nome] = nomes; //log -> Maria.

//E se fosse o terceiro ? 
const [,,nome] = nomes; //log -> Carlos.

//E se fosse o quarto ?
const [,,,nome] = nomes; //log -> Leticia.

//É só utilizamos a virgula para pular elementos!! 
```

E pode misturar array com objeto e objeto com array ? Olha só 

```javascript
//Temos o seguinte array de usuarios e quero pegar a senha do segundo !

const usuarios=[
  {
  nome:['Igor', 'Rodrigues'],
  email:'igor@mail.com',
  senha:'123',
  },
  {
    nome:['Iuri', 'Rodrigues'],
    email:'iuri@mail.com',
    senha:'321',
  }
];
//Primeiro a desestruturação do array [,], 
//depois a desestruturação do objeto [,{senha}], 
//por fim renomeando a senha para pass. [,{senha:pass}]
const [,{senha:pass}] = usuarios; // log -> pass = 321

//Quero pegar o sobrenome do primeiro usuario ! Vamos lá.

//Primeiro desestruturar para pegar o primeiro usuario []
//Depois a desestruturação do objeto pegando a propriedade nome {nome}
//Temos ate agora : 
const [{nome}] = usuarios; //-> log nome : ['Igor','Rodrigues']

//Vamos desestruturar mais uma vez. Pegar o segundo item [,] do array nome !

const [{nome:[,sobrenome]}] = usuarios; // -> log sobrenome: 'Rodrigues'
```

Podemos desestruturar retornos de função e muito mais. Com as melhorias nos objetos, podemos criar uma chave a partir de uma string ai a desestruturação fica muito mais divertida !

## Spread e Rest

Para fechar com chave de ouro ! Já que falei de desestruturação, não poderia deixar de mencionar esses dois operadores. Eles seguem a mesma notação `...nome`, mas possuem funcionalidades específicas. 

Rest basicamente nos permite comprimir um conjunto de dados em um array. Confuso ? Vamos de exemplo:

```javascript
//Imagine que você deu uma festa e quer separar os contatinhos ! 
//Vamos colocar o contatinho principal na sala e os outros na varanda.
//OBS.: NÃO INDICO REALIZAR ESSE TIPO DE EXEMPLO NA VIDA REAL !

const [sala, ...varanda] = ["Contatinho Principal", "Contatinho 1", "Contatinho 2", "Contatinho 3", "Contatinho 4"];
console.log(sala); //Contatinho Principal 
console.log(varanda) //[ 'Contatinho 1', 'Contatinho 2', 'Contatinho 3', 'Contatinho 4' ]

//O que fizemos foi realizar uma desestruturação,
//colocando o primeiro elemento do vetor na variavél sala e os 
//outros na variavél varanda (usando o operador rest) ! 
//Note que varanda é um vetor.

//Podemos utilizar o rest também em parâmetros de função: 
//Pegamos todos os parametros e guardamos no array numeros. 
//Ai é só aplicar o reduce e calcular a soma de todos os elementos do vetor.
 
function soma(...numeros){
   console.log(numeros.reduce((total, item)=> total + item, 0));
 }
soma(1,2,3,4,5); //15
```

O operador Spred é o contrário do rest, em vez de comprimir tudo em um array, ele expande o array em elementos, como se fizéssemos um `for` pegando cada elemento separadamente.

```javascript
const lista = [1,2,3,4,5];

//Qual resultado dessa operação ?

// 1 -  O array ? [ 1, 2, 3, 4, 5 ]
// 2 - Elemento por elemento ? 1,2,3,4,5 

//Temos a impressão de elemento por elemento ! 
console.log(...lista)// 1,2,3,4,5;

//Podemos criar uma nova lista usando o spread 

const novaLista = [...lista,6,7,8,9,10];
console.log(novaLista); //[ 1, 2, 3, 4, 5 ,6, 7, 8, 9, 10 ]

//Senão tivessemos usado o spread : 
const novaLista = [lista,6,7,8,9,10];
console.log(novaLista); // [ [ 1, 2, 3, 4, 5 ], 6, 7, 8, 9, 10 ]
```

Essas são as features que mais uso e gosto no JavaScript ! Existem features mais poderosas como Arrow Functions, Async/Await, manipuladores de Iterador e Iterável, Dynamic Import, manipulação de promises entre outras. Mas isso é assunto para os próximos artigos ! 

A ideia aqui foi mostrar soluções simples que podem elevar nossa produtividade no dia-a-dia ! Abraço.
