<h1 align="center"> NLW Setup - Ignite </h1>

<p align="center">
Projeto desenvolvido como aprendizado para o MBA em Full Stack da Rocketseat. Foco inicial no html e css com um pouco de typescript.
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML / CSS
- Typescript
- Webpack / Babel
- JSON Server

## 💻 Projeto

<p>
O projeto consiste em exibir as informações referentes a cortes de cabelo realizado pelo cliente. O cliente possui um cartão de fidelidade e "coleciona" selos até atingir uma marca para ganhar um corte grátis de brinde. Para exibir as informações, basta inserir o ID do usuário.
</p>

<p>
O ID consiste em um número de 12 dígitos, intercalados por um hífen a cada 3 dígitos (XXX-XXX-XXX-XXX)

Este padrão é aplicado automaticamente a cada input do usuário, de forma a facilitar a digitação do usuário e garantindo a consistência do padrão.
A aplicação suporta um número customizável de selos necessários para atingir o brinde, com o limite de até dez selos.
</p>

<p>
Ao carregar as informações do cliente, uma barra de progresso preenche com uma transição de 1 segundo, resultando em uma pequena animação.
</p>

<p>
Caso o cliente tenha atingido o número necessário de cortes, o presente apresenta uma animação de escala e um modal é exibido dando os parabéns para o usuário (este modal possui um atraso de 1 segundo para que a animação da barra de progresso conclua)
Para testar a aplicação, é utilizado um servidor falso utilizando o pacote json-server. Junto deste repositório é incluso um arquivo de exemplo, e é possível adicionar ou alterar as entradas seguindo o seguinte padrão:
</p>

```
{
  id: string,

  name: string,
  clientSince: string,
  appointmentHistory: [
    {
      date: string, 
      time: string
    },
    ...
  ],
  loyaltyCard: {
    totalCuts: number,
    cutsNeeded: number,
    cutsRemaining: number
  }
}
```

## 🔖 Layout

Você pode visualizar o layout do projeto através [DESSE LINK](https://www.figma.com/community/file/1380913092616830278). É necessário ter conta no [Figma](https://figma.com) para acessá-lo.

## :memo: Licença

Esse projeto está sob a licença MIT.

---