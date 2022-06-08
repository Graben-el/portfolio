import agencia from "../../assets/imagens/projetos/agenciaxyz.gif"
import cafe from "../../assets/imagens/projetos/codecafe.gif"
import electrum from "../../assets/imagens/projetos/electrum.gif"
import pokedex from "../../assets/imagens/projetos/pokedex.gif"
import github from "../../assets/imagens/projetos/githubapi.gif"
import mentor from "../../assets/imagens/projetos/frontendmentor.gif"
import advice from "../../assets/imagens/projetos/advisor.gif"
import meet from "../../assets/imagens/projetos/meet.gif"

export const data = [
    {
        id: "0",
        title: " Landing Page - Agência XYZ",
        description: "Página criada utilizando HTML5 e CSS3, aplicando display Grid para construção do layout...",
        src: agencia
    },
    {
        id: "1",
        title: "Landing Page - Code Café",
        description: "Página criada utilizando HTML5 e CSS3, aplicando Flexbox para construção do layout..",
        src: cafe
    },
    {
        id: "2",
        title: "E-commerce - Electrum",
        description: "Página construída utilizando pré-processador SASS, aplicando o conceito de arquitetura SMACSS e diretivas @use...",
        src: electrum
    },
    {
        id: "3",
        title: "Desafio Front-end Mentor",
        description: "Coletâneas de páginas/exercícios do site Front-end Mentor, construídos a partir de diversas tecnologias como JavaScript, FlexBox, Grid...",
        src: mentor
    },
    {
        id: "4",
        title: "Buscador GitHub API",
        description: "Consumo da GitHub API para buscar, verificar e exibir informações de perfis do GitHub",
        src: github
    },
    {
        id: "5",
        title: "Pokédex - ReactJS",
        description: "Single Page Application (SPA) de catálogo de pokémons consumindo a PokeAPI, utilizando React JS, styled-components, ContextAPI e React-router",
        src: pokedex
    },
    {
        id: '6',
        title: 'API Geradora de Conselhos',
        description: "Projeto simples com HTML5, CSS3 e JavaScript fazendo consumo da API Advice Slip JSON API, que fornece a cada clique um conselho aleatório do banco de dados da API",
        src: advice
    },
    {
        id: '7',
        title: 'Meet Landing Page',
        description: "Projeto simples com HTML5 e CSS3, aplicando técnicas de imagem, position, flexbox e background-blending",
        src: meet
    }
]
