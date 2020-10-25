---
title: Aprendendo TypeScript - Parte 2
description: Classes, herança, polimorfismo, interfaces e um pouco mais.
category: dev
background: "#7159c1"
date: 2020-10-24 12:59:31
image: /assets/img/blake-connally-b3l0g6hlxr8-unsplash.jpg
---
## Introdução

No post anterior, conhecemos um pouco sobre o TypeScript e sua tipagem estática. Hoje vamos falar um pouco sobre orientação a objetos.

## POO

A grande maioria das linguagens hoje são multi-paradigmas, e hoje vamos conhecer um dos paradigmas mais usados no mercado de trabalho! A programação orientada a objetos (POO) é um paradigma que tem o objetivo de abstrair artefatos do mundo real em classes e objetos. 

Classes são responsáveis por determinar/descrever as propriedades (atributos) e comportamentos (métodos) dos objetos. Um objeto é uma instância de uma classe, é a partir dele que quase todo o processamento de um sistema, que implementa esse paradigma, ocorre. Se serve de entendimento, uma classe pode ser comparada com a receita de um bolo e o objeto é o bolo! 

## Classe e Objeto.

Vamos ver no código! Essa é uma classe que representa a conta de um Banco.

~~~typescript
class Conta{
  //atributos - propriedades do objeto.
  numero:number;
  titular:string;
  saldo:number;

  //Construtor para inicializar os atributos
  constructor(numero:number,titular:string,saldo:number){
    this.numero = numero;
    this.titular = titular;
    this.saldo = saldo;
  }

  //metodos - comportamento do objeto.
  sacar(valor:number) {
     this.saldo -= valor;
  }
  depositar(valor:number) {...}
  extrato(valor:number) {...}

}
~~~

*Agora que especificamos como deve ser uma conta, vamos criar um objeto (abrir uma conta).*

~~~typescript
//Criando um objeto!
const minhaConta = new Conta(71548,'Igor Rodrigues',48.5);

//Acessando os atributos do objeto
console.log(minhaConta.numero);

minhaConta.saldo = 100; 
//Aqui já percebemos um problema! Não posso alterar o meu saldo dessa maneira.
minhaConta.sacar(10);
console.log(minhaConta.saldo); //->90
~~~

> Cada vez que criamos um objeto, como o `minhaConta`, na verdade  não estamos criando um objeto e sim uma referência ao objeto. Resumindo, `minhaConta` aponta para região da memória onde o objeto do tipo Conta foi salvo.

Já vimos o que é uma classe (seus atributos e métodos) e o que são objetos. Agora, vamos entrar em alguns conceitos da orientação a objetos.

## Encapsulamento

Não podemos acessar/alterar um atributo de um objeto de maneira direta, como fizemos acima! Temos que proteger nossos atributos e também os métodos, o objeto que dita como deve ser feito o acesso/modificação por meio dos métodos. Como proteger? Aqui entra os modificadores de acesso (public, private, readonly e protected).

Vamos alterar nossa classe!

~~~typescript
class Conta{
  //atributos
  private numero:number;
  private titular:string;
  private saldo:number;

  //Construtor para inicializar os atributos
  constructor(numero:number,titular:string,saldo:number){
    this.numero = numero;
    this.titular = titular;
    this.saldo = saldo;
  }

  //metodos - comportamento da classe
  sacar(valor:number){
    this.saldo -= valor;
  }
  depositar(valor:number){
    this.saldo += valor;
  }
  extrato(){
    console.log(`Conta: ${this.numero}. Saldo: ${this.saldo}`);
  }
}

const minhaConta = new Conta(71548,'Igor Rodrigues',48.5);

minhaConta.numero; //ERROR - Property 'numero' is private and only accessible within class 'Conta'
~~~

Estamos seguros! Mas, como acessar/modificar esses valores? Para o saldo, assim como em um Banco, temos os métodos sacar, depositar e extrato. E se eu quiser mudar meu nome? 

### Getters/Setters

Os métodos get e set são uma maneira de termos acesso a um atributo! Vamos criar um método para modificar o nome.

 ~~~typescript
class Conta{
  private numero:number;
  private titular:string;
  private saldo:number;

  constructor(numero:number,titular:string,saldo:number){...}
 
  sacar(valor:number) {...}
  depositar(valor:number) {...}
  extrato(valor:number) {...}
  
  //Agora temos métodos para acessar e modificar o nome do titular da conta.
  get getTitular():string{
    return this.titular;
  }
  set setTitular(nome:string){
    this.titular = nome;
  }
}
const minhaConta = new Conta(71548,'Igor Rodrigues',48.5);

//Utilizamos os métodos get/set como se fosse propriedades.
minhaConta.setTitular = 'João';
console.log(minhaConta.getTitular); // João
 ~~~

### Métodos e Atributos Static

E se quisermos compartilhar algum atributo/método entre todos os objetos de uma mesma classes usamos a propriedade static. Quero contar o número de contas existentes, vamos criar um atributo para isso.

~~~typescript
class Conta{
  private numero:number;
  private titular:string;
  private saldo:number;
  private static totalContas = 0; //Criando uma variável static

  constructor(numero:number,titular:string,saldo:number){
      ...
      Conta.totalContas +=1; 
   //Ela pertence a classe e não ao objeto, por isso não posso usar this.totalContas
  }
 
  sacar(valor:number) {...}
  depositar(valor:number) {...}
  extrato(valor:number) {...}
  
  
  get getTitular():string{...}
  set setTitular(nome:string){...}
  //Método static para acessar o total de contas já criadas
  static get getTotalContas():number{
    return Conta.totalContas;
  }
}
const minhaConta = new Conta(71548,'Igor Rodrigues',48.5);
const minhaConta2 = new Conta(71548,'Igor Rodrigues',48.5);
const minhaConta3 = new Conta(71548,'Igor Rodrigues',48.5);
                           
console.log(Conta.getTotalContas); //3
~~~

## Herança

Esse é um conceito fundamental da POO. O conceito de herança vem da biologia, onde por exemplo, o filho está predisposto a adquirir características semelhantes à de seus pais.

Podemos criar classes que herdam características (atributos/métodos) de outras classes. Com isso, temos redução de código, reescrita de método e polimorfismo. Vamos ao código!

*Vamos começar com um exemplo muito simples. Temos a classe mãe Pessoa e duas classes que herdam suas características (atributo nome e endereço).*

~~~typescript
class Pessoa{
  nome:string;
  endereco:string;

  constructor(nome:string,endereco:string){
    this.nome = nome;
    this.endereco = endereco;
  }
}
//Usamos o extends para a classe Física herdar a classe Pessoa.
class Fisica extends Pessoa{
  cpf:string;

  constructor(nomeCompleto:string,endereco:string,cpf:string){
    super(nomeCompleto,endereco);
    //super - chamo o construtor da classe mãe, no caso Pessoa.
    this.cpf = cpf;
  }
}

class Juridica extends Pessoa{
  cnpj:string;

  constructor(nomeCompleto:string,endereco:string,cnpj:string){
    super(nomeCompleto,endereco);
    this.cnpj = cnpj;
  }
}

const p1 = new Fisica('Igor Rodrigues', 'Rua a','00000000000');
const p2 = new Juridica('Corporação IR', 'Rua B','0000000000000');

console.log(p1.nome); // Igor Rodrigues
console.log(p2.nome); // Corporação IR
~~~

Com um exemplo simples já conseguimos escrever menos código, imagine em classes muito maiores que essa!? 

### Polimorfismo

Polimorfismo é a habilidade de um objeto possuir varias formas ou seja, podemos referenciar um objeto tanto pela classe mãe, quando por sua classe.

*Imagine que você que é uma agência de emprego e contrata apenas pessoa física! Vamos criar um método para contratação.*

~~~typescript
//...
const p1 = new Fisica('Igor Rodrigues', 'Rua a','00000000000');
const p2 = new Juridica('Corporação IR', 'Rua B','0000000000000');

function contrata(contratado:Fisica){
  console.log(`${contratado.nome}, você é o mais novo contratado`);
}
contrataCTL(p1); // Igor Rodrigues.

//Agora a empresa também contrata PJ, temos que mudar nosso método.
function contrata(contratado:Fisica | Juridica){ //Podemos melhorar.
  console.log(`${contratado.nome}, você é o mais novo contratado`);
}
~~~

Utilizando o conceito de polimorfismo, podemos refatorar nosso método contrata`.

~~~typescript
//...
const p1 = new Fisica('Igor Rodrigues', 'Rua a','00000000000');
const p2 = new Juridica('Corporação IR', 'Rua B','0000000000000');

function contrata(contratado:Pessoa){
  console.log(`${contratado.nome}, você é o mais novo contratado`);
}
contrata(p1); 
//P1 é da classe Física, mas posso referenciar pela classe mãe Pessoa
contrata(p2);
// P2 é da classe Jurídica, mas posso referenciar pela classe mãe Pessoa
~~~

 ### Reescrita de método

*Em alguns momentos precisamos modificar um método herdado para fazer sentido na classe que estamos criando. Ou seja, precisamos especializar um método que foi herdado.* Vamos ao código.

~~~typescript
class Pessoa{
  nome:string;
  endereco:string;

  constructor(nome:string,endereco:string){
    this.nome = nome;
    this.endereco = endereco;
  }

  autentica(){
    console.log(`Usuario: ${this.nome}`);
  }
}

class Fisica extends Pessoa{
  cpf:string;

  constructor(nomeCompleto:string,endereco:string,cpf:string){
    super(nomeCompleto,endereco);
    this.cpf = cpf;
  }
  // Aqui reescrevemos nosso método.
  autentica(){
    super.autentica();
    console.log(`Senha: ${this.cpf}XX`);
  }
}
~~~

> Note que não sei o private nos atributos da nossa classe Pessoa. O private permite apenas a classe ter acesso ao atributo. Para usarmos um atributo com segurança e que as classes filhas possam ter acesso, utilizamos o modificador protected.

## Classes Abstratas

São classes que não podem ser estanciadas! Percebeu que não criamos nenhum objeto do tipo Pessoa? Para nossos exemplos não faz sentido, ou o objeto pertence a classe Física ou Jurídica. Vamos transformar a classe Pessoa em abstrata. 

~~~typescript
abstract class Pessoa1{
  protected nome:string;
  protected endereco:string;

  constructor(nome:string,endereco:string){
    this.nome = nome;
    this.endereco = endereco;
  }

  autentica(){
    console.log(`Usuario: ${this.nome}`);
  }
  
}

const pw = new Pessoa1(); //Error - Cannot create an instance of an abstract class.
~~~

Podemos ter também métodos abstratos, eles só possuem implementação, serve como uma assinatura avisando que as classes filhas precisam implementar esse método. 

## Interfaces

Conhecemos as interfaces lá na [parte 1](https://igorteixeira.com.br/aprendendo-typescript-parte-1/). Vimos que ela expõe o que o objeto deve fazer! Podemos usar ela também com as classes e com isso ganhamos desacoplamento.

*Imagine que temos uma classe mãe Funcionário e varias classes filhas(Gerente, Secretario e Presidente). Gerente e Presidente deve implementar o método login, vamos usar interface para avisar a essas classes que elas devem implementar esse método.*

~~~typescript
interface LoginFuncionario{
  login: (usuario:string,senha:number)=>boolean;
}

abstract class Funcionario{
  protected nome:string;
  protected endereco:string;

  constructor(nome:string, endereco:string){
    this.nome = nome;
    this.endereco = endereco;
  }

}

class Gerente extends Funcionario implements LoginFuncionario{
  protected salario:number;
  protected meta:number;

  constructor(salario:number, meta:number, nome:string, endereco:string){
    super(nome,endereco);
    this.salario = salario;
    this.meta = meta;
  }
  login(usuario:string,senha:number){
   	//processo de autenticação, retorna true/false
    return true;
  }
}

class Presidente extends Funcionario implements LoginFuncionario{
  // seus atributos.
  constructor(nome:string, endereco:string){
    super(nome,endereco);
    // inicialização do seus atributos...
  }
  login(usuario:string,senha:number){
    //processo de autenticação, retorna true/false
    return true;
  }
}
~~~

Uma vez que minha classe implementa LoginFuncionario, ela é obrigada a criar o método login seguindo a especificação da interface.
> Lembra do polimorfismo? Também podemos referenciar Gerente e Login pela interface LoginFuncionario! Incrível!

## Conclusão

Trabalhar com programação orientada a objetos ficou muito legal com o typescript, <del>usar esse paradigma no JavaScript não é tão divertido.</del> Se você ainda não tinha trabalhado com orientação a objetos, essa apostila da [Caelum](https://www.caelum.com.br/apostila-java-orientacao-objetos) tem um conteúdo bem passo a passo e a documentação do [TypeScript](https://www.typescriptlang.org/docs/handbook/classes.html) também. Agora vou aproveitar o resto do domingo e colocar o TypeScript em prática!