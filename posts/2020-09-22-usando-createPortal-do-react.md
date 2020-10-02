---
title: Usando createPortal do React
description: Criando um head para social media usando createPortal.
category: react
background: "#47d7ff"
date: 2020-09-22 09:53:23
image: /assets/img/portal.jpg
---
![Imagem do jogo portal](/assets/img/portal.jpg)

## Introdução

Durante o desenvolvimento deste blog uma das coisas que mais me fascinou foi o uso da biblioteca [React Helmet](https://github.com/nfl/react-helmet) para adicionar as "tags social media" para cada artigo do blog. Algumas das tags:  

```html
<head>
    <!-- ... -->
    <title>Artigo 1</title>
    <meta name="description" content="Essas são as tags social media" />
    <!-- ... -->
</head>
```

São importantíssimas para o processo de SEO e otimização de sites, pois é a primeira coisa que os robôs de crawler examinam quando chegam ao nosso site. *Além disso, deixa um aspecto maneiro quando compartilhamos o link.*

Mas sem enrolação, vamos ao que interessa! 

## Criando um componente de SEO

Quero criar um componente que seja capaz de modificar o `head`, adicionando os elementos de `title` e `meta description`. A ideia aqui é apenas entender de maneira simples como o React Helmet realiza essa função.

Primeiro vamos criar o nosso componente Article, que será o componente responsável por renderizar os nossos artigos.

```react
import React from 'react';
import SEO from '../SEO';

import { Container } from './styles';

function Article({ title, description, children }) {
  return (
    <Container>
      <SEO title={title} description={description} />
      <h1>{title}</h1>
      <span>{description}</span>
      {children} {/** Representa o corpo do nosso artigo */}
    </Container>
  );
}

export default Article;
```

Agora vamos criar o nosso componente SEO, que será responsável por criar nossas tags de social media para cada artigo.

```react
import React from 'react';

function SEO({ title, description }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
}

export default SEO;
```
[Link código completo](https://github.com/igorsteixeira94/usandoCreatePortal)

No arquivo App.js vou criar um componente Article, passando um title e description e vamos ver o que acontece: 

![Nosso artigo sem createPortal.](/assets/img/artigosemportal.png)

Nosso componente de SEO foi renderizado dentro da nossa `div.class="sc-bdnylx"`, essa `div` representa o nosso artigo. Esse já era o resultado esperado, no React quando renderizamos um componente ele sempre é montado dentro da DOM como um filho do nó **pai** mais próximo (neste caso o componente Article). E agora ?

## Usando o createPortal

[Portals](https://pt-br.reactjs.org/docs/portals.html) é uma feature disponível no React v16, ela nos permite renderizar um elemento filho em qualquer nó da DOM fora da hierarquia do componente pai. 

> Seu comportamento e funcionalidades continuarão como de um componente filho padrão.

Então vamos refatorar nosso código adicionando está funcionalidade.

```react
import React from 'react';
import ReactDOM from 'react-dom';

function SEO({ title, description }) {
  return ReactDOM.createPortal(
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>,
    document.querySelector('head')
  );
}

export default SEO;
```

Resultado:

![Artigo usando createPortal](/assets/img/artigocomportal.png)

Agora sim, podemos ter inúmeros artigos cada um com suas respectivas tags de SEO.