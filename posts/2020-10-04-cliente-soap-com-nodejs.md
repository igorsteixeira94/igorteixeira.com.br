---
title: Cliente SOAP com nodejs
description: Criando um cliente SOAP com nodejs.
category: nodejs
background: "#7ec729"
date: 2020-10-04 11:28:50
image: /assets/img/ilya-pavlov-oqtafyt5ktw-unsplash.jpg
---
## Introdução

Quando comecei a estudar desenvolvimento web sempre que pesquisava sobre a arquitetura Rest, um cara chamado SOAP aparecia nas pesquisas. Então hoje resolvi escrever um pouco sobre ele.

## SOAP

**SOAP - Simple Object Acces Protocol** é um protocolo de comunicação para troca de informações estruturadas em web services, construído com base em XML e HTTP. A estrutura do protocolo: 

* Envelope:  É o elemento raiz do xml, contém os argumentos e meta-informações que são enviadas/recebidas durante a comunicação;
* Header: Guarda as especificações para processar a mensagem (informações de autenticação, roteamento, ...);
* Body: É o elemento principal, ele contém a informação a ser transportada.

![Estrutura do SOAP](/assets/img/soap.svg)

SOAP geralmente utiliza o protocolo HTPP ou RPC. Um exemplo de comunicação SOAP através do protocolo HTTP:

```xml
POST /calculator.asmx HTTP/1.1
Host: www.dneonline.com
Content-Type: text/xml; charset=utf-8
Content-Length: length
SOAPAction: "http://tempuri.org/Add"

<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <Add xmlns="http://tempuri.org/">
      <intA>2</intA>
      <intB>5</intB>
    </Add>
  </soap:Body>
</soap:Envelope>
```

*Aqui estamos enviando um POST para o web services chamado Calculator. Dentro do body, solicitamos o serviço Add e passamos os dados necessários. Resumindo é um web service calculadora que realiza a soma de dois números (2+5).*

A resposta do web services é: 

```xml
HTTP/1.1 200 OK
Content-Type: text/xml; charset=utf-8
Content-Length: length

<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <AddResponse xmlns="http://tempuri.org/">
      <AddResult>int</AddResult>
    </AddResponse>
  </soap:Body>
</soap:Envelope>
```

Agora que conhecemos a estrutura de comunicação, como criar um cliente SOAP? Como trocar informações com um web services? 

Muito simples, como tudo funciona com XML, precisamos fazer com que nosso cliente entenda essa estrutura de comunicação e saiba os serviços disponíveis. Para isso existe o **WSDL - Web Services Description Language** é uma especificação desenvolvida pelo W3C que permite justamente descrever esses serviços e mensagens, em outras palavras é a documentação do nosso web service.

Resumindo até aqui:

* Web services são estruturas para disponibilizar serviços na web;
* SOAP é um protocolo de comunicação entre cliente/servidor que utiliza XML como formato dos dados;
* WSDL é a documentação que utilizamos para o cliente interpretar os serviços disponíveis em um determinado web services. 

## Agora vamos para a prática

Para praticar vou utilizar esse [Web Service](http://www.dneonline.com/calculator.asmx). Como acessar sua WSDL? No final da url colocamos ?wsdl, fica assim: `http://www.dneonline.com/calculator.asmx?wsdl`. A documentação tem o seguinte aspecto:

![wdsl](/assets/img/wsdl.png)

Primeiro passo é instalação da biblioteca soap, ela já vai construir toda a estrutura do SOAP: `yarn add soap`

Agora vamos criar nosso client SOAP passando o WSDL para ele:

```js
//index.js
const soap = require('soap');

const url = 'http://www.dneonline.com/calculator.asmx?wsdl';

soap.createClient(url,(err,client)=>{
  if(err) return console.error(err);
    console.log(client);
  
});
```

Ao printarmos o client podemos observar que ele já reconheceu os serviços disponíveis. 

![Serviços do web service](/assets/img/services.png)

Vamos realizar a soma de dois números:

```js
//index.js
const soap = require('soap');

const url = 'http://www.dneonline.com/calculator.asmx?wsdl';

soap.createClient(url,(err,client)=>{
  if(err) return console.error(err);
  
    client.Add({intA:2,intB:5}, (err,{AddResult})=>{
      
    if (err) return console.log(err)
    
    console.log(AddResult);

    });
  
});
```

*Com essas informações a biblioteca soap, irá criar todo o nosso envelope e dentro do Body adicionar nossas informações, idêntico ao exemplo que vimos anteriormente.*

Podemos perceber que a comunicação com SOAP é muito mais pesada do que utilizar estruturas de dados como JSON. Bom, esse foi apenas um exemplo que fiz para entender um pouco sobre o funcionamento do SOAP. Por fim, #teamapirest.