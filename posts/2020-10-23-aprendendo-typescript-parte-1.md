---
title: Aprendendo TypeScript - Parte 1
description: Iniciando o aprendizado em TypeScript
category: dev
background: "#7159c1"
date: 2020-10-23 09:56:54
image: /assets/img/blake-connally-b3l0g6hlxr8-unsplash.jpg
---
* [Introdução](#introducao)
* [Tipagem](#tipagem)
* [Instalação](#instalação)
* [Tipos básicos](#tipos-básicos)



## Introdução

Apesar de usar typescript diversas vezes, hoje separei um tempo para aprende um pouco mais sobre ele. Segundo o [site oficial](https://www.typescriptlang.org/) ele é uma linguagem de código aberto, compilada, construída em cima do JavaScript adicionando definições de tipagem estática. 

Muita gente tem preconceito com tipagem estática, eu particularmente gosto muito! Mas, sou suspeito para falar programei bastante em Java, C++ e C. 



## Tipagem

Quando estudamos uma linguagem de programação é importante conhecer seus tipos e paradigmas. Aqui vou tratar apenas sobre a classificação com respeito a tipagem, para entendermos o que é tipagem dinâmica, estática, forte ou fraca.

* Tipagem forte: São linguagem que não aceitam conversões automaticamente. Como o python por exemplo:

  ```python
  nome = "Igor Rodrigues"
  idade = 26
  
  print(nome + "" + idade) #TypeError, pois não posso concatenar um "inteiro com uma string"
  
  #Não aceita conversão automatica, mas posso realizar essa conversão de maneira explicita
  
  print(nome +""+ str(idade)) 
  ```

* Tipagem fraca: São linguagem que aceitam conversões automaticamente, conversão ocorre de maneira implícita. Como o nosso Typescript:

  ```typescript
  let nome :string;
  nome = "Igor Rodrigues";
  
  let idade: number;
  idade = 26;
  
  console.log(nome +""+ idade);
  
  //Melhor ainda usando template literals
  console.log(`${nome} ${idade}`);
  ```

* Tipagem estática: São linguagem que no momento da declaração da variável, devemos declarar o seu tipo e esse tipo não pode ser alterado.

  ```typescript
  let nome: string; 
  nome = "Igor Rodrigues";
  
  //Se tentarmos alterar o tipo
  let nome: int; //Cannot redeclare block-scoped variable
  
  //Se tentarmos atribuir um valor que não seja do tipo declarado
  nome = 26; //Type 'number' is not assignable to type 'string'.
  ```

* Tipagem dinâmica: São linguagem que não necessitam da declaração do tipo da variável, a propria linguagem faz a escolha durante o tempo de execução. *Alocação de espaço de memória dessas linguagens são muito interessantes de se estudar!*

   

  ```javascript
  let nome = "Igor Rodrigues";
  
  console.log(nome, typeof(nome)); //Igor Rodrigues string
  
  nome = 26;
  console.log(nome, typeof(nome)); //26 number
  
  nome = true;
  console.log(nome, typeof(nome)); //true boolean
  
  ```

------

Bom, agora que sabemos um pouco sobre tipagem, TypeScript é uma linguagem de tipagem estática e fracamente tipada. Vamos lá!

## Instalação

Bom, para começar precisamos do [Node](https://nodejs.org/en/) instalado! Para instalar o [TypeScript](https://www.typescriptlang.org/download):

~~~shell
npm install typescript --save-dev
~~~

Após instalação, é necessário configurar o arquivo  tsconfig.json, para criar o arquivo:

~~~shell
tsc --init
~~~

A única mudança que fiz, foi adicionar uma pasta para os arquivos compilados.

~~~json
{
    "outDir": "./dist", 
}
~~~

Também gosto de usar o [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)! Assim, fico mais eficiente quando estou em ambiente de desenvolvimento.

[Meu repositório](https://github.com/igorsteixeira94/learnts) com estudos desse blog!

## Tipos Básicos

Os tipos de dados do TypeScript são os mesmos do JavaScript com inclusão do tipo enumeration.

### Boolean

*Pode assumir apenas os valores true e false.*

~~~typescript
let isBoolean: boolean = true;
~~~

### Number

*Pode ser qualquer tipo numérico como: inteiros, decimais, binários, hexadecimal,... .*

~~~typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octa: number = 0o744;


//Para inteiros acima de 4 bytes
let big: bigint = 100n; //nomeclatura ES2020
~~~

### String

*Podemos definir uma string com double quotes ("), single quote (') ou template string (`)*

~~~typescript
let firstname: string = 'Igor';
let lastname:string = "Rodrigues";
let idade:number = 26;

let profile:string = `${firstname} ${lastname} ${idade} anos`;
~~~

### Array

*Podemos definir um array de duas maneiras, type[] ou Array<'elemtype>*

~~~typescript
let list: number[] = [1,2,3];


let list1:Array<string> = ["1","2","3"];

~~~

### Tuple

*São arrays de tamanho e valores já conhecidos*

~~~typescript
let listx: [string, number, boolean] = ["1",1,true];
~~~

### Enum

*São objetos de chave/valor. Onde a chave inicialmente começa com 0, mas pode ser alterada.*

~~~typescript
enum Color{
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;
console.log(c) // 0

enum Color{
  Red = 21,
  Green,
  Blue
}
let c: Color = Color.Green;
console.log(c) // 22
~~~

### Unknown

*Quando não soubermos o valor de uma variável, ou queremos aceitar intencionalmente todos os valores.*

~~~typescript
let notSure: unknown = 4;
console.log(notSure); //4
console.log(typeof(notSure)); //number

const numero:number = notSure;//Error - TypeScritp não pode associar um unknown a um number.

if(typeof notSure === 'number'){
  const numero:number = notSure; //Ok - TypeScript agora sabe que é um tipo number
}

notSure = "maybe a string instead";
console.log(notSure); //maybe a string instead
console.log(typeof(notSure)); //string


notSure = false;
console.log(notSure); //false
console.log(typeof(notSure)); //boolean
~~~

### Any

*Esse tipo é perigo! Pois, você indica para o typescript ignorar totalmente o tipo daquela variável. Diferente do unknown, aqui podemos acessar qualquer propriedade de maneira arbitraria e não receberemos erro em TEMPO DE EXECUÇÃO.*

~~~typescript
let anyType:any = 4;
anyType.ifItExists(); //Ok, mas não irá compilar.

let unknownType: unknown = 4;
unknownType.toFixed(); //Error, Objeto do tipo unknown
~~~

### Void

*Temos também que 'tipar' o retorno das nossas funções, e quando não retorna nada? Será do tipo void.

~~~typescript
function print():void{
    console.log("Hello");
}
~~~

### Null e Undefined

*São sub-tipos de todos os outros tipos de dados. Depois vamos entender quando usar.*

~~~typescript
let p:undefined = undefined;
let m:null = null;
~~~

### Never

*Também é um sub-tipo, é comumente utilizado quando a função não retorna nada, ou lança uma exceção. Seu critério é que não pode ter um ponto final alcançável.*

~~~typescript
function print():never{
  throw new Error("");
}
~~~

### Object

*É um tipo de dado não-primitivo. Ou seja, ele é qualquer coisa que não seja number, string, boolean, bigint, symbol, null ou undefined.*

~~~typescript
let cart: object = {
  name:'fusca',
  ports: '2'
}
~~~

### Type Assertions

*Uma maneira de afirmarmos o tipo de uma variável! Usaremos bastante nas Interfaces.*

~~~typescript
let someValue: unknown = "Isso é uma string";
//Lembra que antes o tipo unknown não tinha acesso as propriedades?
//Agora estou afirmando para o TypeScript que aquela variavel é uma string.
let lengthSomeValue:number = (someValue as string).length; 

//Podemos usar a notação com <>
let lengthSomeValue:number = (<string>someValue).length;
~~~

------

> Agora relaxa! Você não precisa sair desesperado em tipar tudo. Utilize apenas quando for necessário. O TypeScript também possui Type Inference, ou seja, tipagem por inferência. 