---
title: Gerenciando as dependências no Node.js
description: Aprendendo um pouco mais sobre dependências no Node.js
category: nodejs
background: "#7ec729"
date: 2020-10-07 04:23:38
image: /assets/img/capa.jpg
---
![pacotes](/assets/img/capa.jpg)

## Introdução

Semanas atrás foram descobertos pacotes no npm que coletavam ip, geolocalização, modelo de CPU, dentre outras informações. Já foram excluídos, mas me levou a uma reflexão: "Tenho que aprender mais e ir além do *npm install*! Bora lá!

## Package.json

Vamos primeiro conhecer esse arquivo, até porque ele vai ser responsável por gerencias nossas dependências. 

O arquivo package.json é um arquivo que contém os metadados sobre o projeto, informações sobre nossas dependências (dependencies e devDependencies) e os script que realizam alguma ação no nosso projeto (rodar um teste, realizar um lint, buildar o código). Ele não é criado manualmente, é resultado do comando init. Vamos criar um novo projeto com `npm init -y`.  *A tag -y é para atribuir valores padrões para os metadados.* Ele tem o seguinte aspecto:

```json
{
  "name": "pacotenodejs",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies":{},
  "devDependencies":{},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
}
```

* Metadados: São as informações do projeto, name, version, license, main, ... .
* Dependências: São divididas em dois grupos, dependencies e devDependencies.
* Scripts: Executar ações em um projeto.

Aqui vamos focar apenas nas dependências. Qual a diferença entre dependencies e devDependencies? A primeira guarda os pacotes necessários para executar nosso projeto em produção, a segunda guarda os pacotes que são necessários apenas no ambiente de desenvolvimento.

## Instalando pacotes

Um pacote/dependência é um biblioteca de terceiros, ou seja, um trecho de código reutilizável que faz uma determina tarefa e que pode ser adicionada ao nosso projeto. Ganhamos com isso, produtividade, um código de maior qualidade e não nos preocupamos com manutenção. Antes de instalar um pacote é importante ter alguns cuidados:

* Verifique o tipo de licença: Algumas dependências não permitem a utilização em projetos para venda;
* Verifique se a equipe daquela dependência oferece uma manutenção constante;
* Verifique nos sites de registros globais (npm e yarn) as informações sobre aquela dependência. Observe que uma dependência pode ''depender' de muitas outras. Sempre bom ficar ligado. 

Comando para instalação um pacote

```shell
npm install <nome> 

//Para instalar como dependência de desenvolvimento (devDependencies)
npm install <nome> --save-dev

// Na hora de subir para produção, instalar apenas as dependências de produção:
npm install --production
```

Após a instalação de um pacote, ele é baixado em uma pasta chamada node_modules. E como falei, pacotes dependem de outros, e esses outros pacotes também dependem de outros... . Vamos ver: 

```shell
npm install bcrypt

//Depois de instalado, vamos listar os pacotes que estão na node_modules:
npm list

//Output:
yarn list v1.22.5
├─ abbrev@1.1.1
├─ ansi-regex@2.1.1
├─ aproba@1.2.0
├─ are-we-there-yet@1.1.5
│  ├─ delegates@^1.0.0
│  └─ readable-stream@^2.0.6
├─ balanced-match@1.0.0
├─ bcrypt@5.0.0
│  ├─ node-addon-api@^3.0.0
│  └─ node-pre-gyp@0.15.0
├─ brace-expansion@1.1.11
│  ├─ balanced-match@^1.0.0
│  └─ concat-map@0.0.1
├─ chownr@1.1.4
├─ code-point-at@1.1.0
├─ concat-map@0.0.1
├─ console-control-strings@1.1.0
├─ core-util-is@1.0.2
├─ debug@3.2.6
│  └─ ms@^2.1.1
├─ deep-extend@0.6.0
├─ delegates@1.0.0
├─ detect-libc@1.0.3
├─ fs-minipass@1.2.7
│  └─ minipass@^2.6.0
├─ fs.realpath@1.0.0
├─ gauge@2.7.4
│  ├─ aproba@^1.0.3
***
//Esses são alguns ! 
```

## Listando

Podemos utilizar o yarn/npm list para listar os pacotes. O problema é que ele vai listar todos os pacotes, cada pacote instalado terá instalado também suas dependências. Com isso temos uma árvore de dependências, se temos uma árvore podemos imprimir de acordo com a profundidade usando a flag --depth<profundidade>. Vamos ver:

```shell
//A profundidade 0 são os pacotes que instalamos diretamente.
npm list --depth=0 

//Output:
└── bcrypt@5.0.0

//Na profundidade 1 temos todos os pacotes que instalamos e os pacotes que bcrypt depende diretamente.
npm list --depth=0 

//Output:
└─┬ bcrypt@5.0.0
  ├── node-addon-api@3.0.2
  └── node-pre-gyp@0.15.0

//Na profundidade 2 temos todos os pacotes já vistos até agora e os pacotes que node-addon-api e node-pre-gyn dependem. E assim por diante, nas demais profundidades.

//Se você quiser buscar por um pacote especifico, pode usar o comando grep. No exemplo listo os possíveis pacotes que iniciam com o nome safe:
npm list | grep safe

//Output:
    │ │ └── safer-buffer@2.1.2
    │ │   ├── safe-buffer@5.1.2 deduped
    │ │   │ └── safe-buffer@5.1.2 deduped
      │ ├── safe-buffer@5.1.2 deduped
      ├── safe-buffer@5.1.2
```

## Excluindo

Para excluir aquelas dependências que não usamos mais, temos duas opções:

* npm unistall <nome> : Remove o pacote do package.json e da pasta node_modules.
* npm prune: Remove da pasta node_modules todos os pacotes que não estão listados no package.json. Ou seja, se você quiser remover mais de um pacote, apague eles da node_modules e rode um `npm prune`.

## Atualizando

Os pacotes utilizam o controle de versão semântico, é um controle de versão utilizado por jogos, empresas e desenvolvedores. Existem três tipos de versão, e esses tipos definem as abordagem que podemos utilizar no momento de atualizar nossos pacotes. 

Um pacote é escrito no package.json no seguinte formato:  "pacote": "1.0.0". Agora vamos para as versões:

* Versão principal: É o número mais a esquerda, uma alteração nesse número indica que o pacote passou por alterações e talvez seja necessário reescrever parte do código. Ex.: O pacote date-fns atualizou e mudou o nome de uma função que formata a data, onde tem essa função no meu projeto sou obrigado a reescrever meu código. (*Agora imagine um projeto com alto acoplamento, reescrever código pode ser uma furada.*)
* Versão secundária: É o número do meio, ele indica que foram adicionados novos recursos no pacote, geralmente deve ser seguro realizar essas atualizações.
* Versão de patch: É o número mais a direita, ele indica que foram corrigidos bugs, geralmente também é seguro realizar essas atualizações.

Agora o que isso tem haver com as atualizações? Imagine que você tem um projeto com alto acoplamento e só deseja atualizar as versões de patch, como fazer isso? Configurando o package.json! 

* Quero que meu pacote atualize apenas a versão de patch: Antes da versão escrevemos um '~' ou usando a notação: 1.0.x. 

  * Ex: "bcrypt" : "~5.0.0" ou "bcrypt" : "5.0.x"
* Quero que meu pacote atualize apenas a versão secundária: Antes da versão escrevemos um '^' ou usando a notação: 1.x.0.

  * Ex: "bcrypt" : "^5.0.0" ou "bcrypt" : "5.x.0"
* Quero que meu pacote atualize para a versão principal: Antes da versão escrevemos um '*' ou usando a notação: x.0.0. 

  * Ex: "bcrypt" : "*5.0.0" ou "bcrypt" : "x.0.0"

Por fim e não menos importante, comandos para atualização: 

```shell
npm update ou npm install //De acordo com a Microsoft eles funcionam com um aliase um do outro.

//Atualizar uma versão especifica:
npm update <nome>@<versão>
```

## Listando os pacotes desatualizados

Instalei o bcrypt na versão ~3.0.0 para testar. Vamos listar os pacotes desatualizados:

```shell
npm install bcrypt@~3.0.0 

//Vamos rodar o npm outdated para encontrar esse pacote desatualizado:
npm outdated

//Output:
Package  Current  Wanted  Latest  Location
bcrypt     3.0.8   3.0.8   5.0.0  ExerciseBlog
```

* Current : É a versão instalada em nosso projeto.
* Wanted: É a ultima versão semântica do pacote, note que instalei usando ~ (versão de patch)
* Lastest: Ultima versão disponível.

## Corrigindo problemas

Ao instalar o bcrypt na versão 3.0.8, tive a seguinte saída. O que significa que foi encontrado vulnerabilidades, *essa resposta de log aparece cada vez que instalamos ou atualizamos um pacote.* Vamos resolver.

```shell
// Ao final da instalação tive esse alerta:
+ bcrypt@3.0.8
added 68 packages from 49 contributors and audited 68 packages in 12.783s

1 package is looking for funding
  run `npm fund` for details

found 1 moderate severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details
```

O comando `npm audit fix` tenta corrigir o problema. Ele atualiza para uma versão que não existe o problema, porém o comando pode solicitar a execução `npm audit fix --force`, devendo atualizar a versão principal.

## Ferramenta npx

Para tratar problemas com dependências instaladas globalmente, o npx permite carregar uma dependência, executar um comando e apos execução realiza a limpeza (remover do sistema). Pode ser usada para rodar comandos de devDependencies em ambiente de produção, como por exemplo: Gerar as migrations.

## Package-lock.json

Por fim, mas não menos importante o arquivo package-lock.json. Ele é gerado apenas quando modificamos a pasta node_modules. Nele podemos ver todas aquelas dependências listadas com o comando npm list, otimiza o processo de instalação e também garante instalações necessárias para funcionamento.

> Digamos que você especifique `1.x`. Você está usando a versão 1.2 e uma versão 1.4 é lançada. A nova versão acaba interrompendo seu código. Alguém que estiver instalando seu aplicativo naquele momento receberá um aplicativo que não funciona. No entanto, se houver um arquivo `package-lock.json` informando que a versão 1.2 foi usada, ela será instalada. 

Existe inúmeras funcionalidades nas ferramentas npm e yarn que não foram exploradas aqui, mas acredito que esse já seja um inicio para entendermos e instalarmos nossos pacotes de maneira mais segura e confiante.