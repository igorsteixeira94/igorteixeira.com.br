import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';

import * as S from '../components/Post/styles';
import SocialLinks from '../components/SocialLinks';

function AboutPage() {
  return (
    <Layout>
      <SEO
        title="Sobre mim"
        description="Aqui conto um pouco de como conheci a programação e o que estou aprendendo"
      />
      <S.MainContent>
        <h1 style={{ margin: 0 }}>Sobre mim</h1>
        <p>
          Meu nome Igor Rodrigues da Silva Teixeira, nasci em Barreiras-Ba, sou
          cientista da computação e apaixonado por tecnologia.
        </p>
        <h3>Como tudo começou</h3>
        <p>
          O meu primeiro contato com programação foi durante 2009-2012, no curso
          técnico do IFBA, onde tive contato com linguagens como: "Portugol, C,
          HTML, PHP e JAVA."
        </p>
        <p>
          Meu segundo contato com a programação veio em 2014 quando me mudei
          para Barra do Garças/MT, no curso de ciência da computação da UFMT,
          onde pude aprender sobre estrutura de dados, bancos de dados,
          paradigmas de programação, AI{' '}
          <small>
            <a
              href="http://bdm.ufmt.br/handle/1/394"
              rel="noopener noreferrer"
              target="_blank"
            >
              (utilizei no meu tcc)
            </a>
          </small>
          , engenharia de software, ... . Desde então estou sempre consumindo
          conteúdo e aprendendo coisas novas.
        </p>

        <blockquote>
          <p>
            "Quem ensina aprende ao ensinar. E quem aprende ensina ao aprender."{' '}
            <br /> <small>Paulo Freire</small>
          </p>
        </blockquote>
        <h3>Por fim </h3>
        <p>
          Sou um cara extremamente bem humorado, adoro conversar e aprender com
          outras pessoas. Nas horas vagas, estou consumindo algum conteúdo novo,
          assistindo alguma série, desenvolvendo projetos pessoais e conversando
          sobre finanças.
        </p>
        <p>
          <del>Se perdeu todo esse tempo lendo sobre mim</del>, entre em contato
          através de qualquer uma das minhas redes sociais.
        </p>
        <SocialLinks className="socialLinkAbout" />
      </S.MainContent>
    </Layout>
  );
}

export default AboutPage;
