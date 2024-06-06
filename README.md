# Trybe

Este repositório contém atividades de aprendizagem desenvolvidas por Tatiane Marinho [linkedin](https://www.linkedin.com/in/marinhotatiane/) enquanto estudava na [Trybe](https://www.betrybe.com/).

_"A Trybe é uma escola do futuro para qualquer pessoa que queira melhorar de vida e construir uma carreira de sucesso em tecnologia, onde a pessoa só paga quando conseguir um bom trabalho."_

O programa conta com mais de 1.500 horas de aulas presenciais e online, aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.<br>

<details>
  <summary><strong>O que foi desenvolvido</strong></summary><br />

 Neste projeto, foi desenvolvido um gerenciador de senhas. Ao utilizar essa aplicação, uma pessoa usuária deverá ser capaz de:

  - Cadastrar senhas para serviços que ela utiliza na internet.

  - Visualizar as próprias senhas cadastradas e as informações do serviço utilizado.

  - Esconder as senhas salvas.

  - Remover os dados armazenados anteriormente.

</details>

<details>
  <summary><strong>Habilidades</strong></summary><br />

  - Ler o estado de um componente e utilizá-lo para alterar o que é exibido na tela.

  - Atualizar o estado de um componente.

  - Listar componentes de maneira dinâmica.

  - Criar formulários.

  - Renderizar componentes de maneira condicional.

  - Transmitir informações entre componentes por meio de _props_.

  - Transmitir informações de componentes-filhos para componentes-pais via callbacks.
</details>

<details>
<summary><strong>Dependências</strong></summary><br />
Para instalar as dependências :  - `npm install`

</details>

<details>
  <summary><strong>Linter</strong></summary><br />
 Foi desenvolvido pela Trybe.

</details>

<details>
<summary><strong>Testes</strong></summary><br />
**Testes desenvolvidos pela Trybe**

Todos os requisitos do projeto foram testados **automaticamente** por meio do [React Testing Library](https://testing-library.com/docs/react-testing-library/intro). 

## Observações técnicas

Alguns requisitos seguiram um padrão pré-estabelecido para que os testes automáticos funcionem corretamente. 

</details>

# Requisitos Obrigatórios

## 1 - Crie um título para a aplicação

Adicione um título à sua aplicação.

- O título deve estar em uma _tag_ `<h1>`.
- O título deve conter o texto `Gerenciador de senhas`.
- Você pode escolher onde colocar o título, mas ele deve estar dentro do componente `App`.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - A aplicação renderiza uma tag h1 contendo o texto "Gerenciador de senhas".

</details>

---

## 2 - Crie um componente Form

Crie um componente chamado `Form`.

Esse componente deve ser renderizado no `<App>` e deve possuir:

- Um _input_ do tipo _text_ com o texto `Nome do serviço` como label.
- Um _input_ do tipo _text_ com o texto `Login` como label.
- Um _input_ do tipo _password_ com o texto `Senha` como label.
- Um _input_ do tipo _text_ com o texto `URL` como label.
- Um _button_ com o texto `Cadastrar`.
- Um _button_ com o texto `Cancelar`.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - O componente `Form` tem um input associado a uma label com o texto "Nome do serviço".
  - O componente `Form` tem um input associado a uma label com o texto "Login".
  - O componente `Form` tem um input associado a uma label com o texto "Senha".
  - O componente `Form` tem um input associado a uma label com o texto "URL".
  - O componente `Form` tem um botão com texto "Cadastrar".
  - O componente `Form` tem um botão com o texto "Cancelar".

</details>

---

## 3 - Renderize condicionalmente o formulário

- Renderize um botão com o texto "Cadastrar nova senha"

Inicialmente a aplicação deverá exibir apenas o botão com o texto "Cadastrar nova senha".

- Ao clicar no botão "Cadastrar nova senha":
  - ele deverá desaparecer;
  - o componente `<Form />` deverá ser renderizado.
- Ao clicar no botão do formulário com o texto `Cancelar`:
  - o formulário deverá desaparecer.
  - o botão com o texto "Cadastrar nova senha" deverá ser renderizado.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - A aplicação renderiza o botão "Cadastrar nova senha".
  - Ao clicar no botão "Cadastrar nova senha", ele deverá desaparecer.
  - Ao clicar no botão "Cadastrar nova senha", o formulário deverá ser renderizado.
  - Ao clicar no botão "Cancelar" do formulário, o formulário deverá desaparecer.
  - Ao clicar no botão "Cancelar" do formulário, o botão "Cadastrar nova senha" deverá aparecer.

</details>

---

## 4 - Valide os campos do formulário

O botão `Cadastrar` do formulário só poderá estar habilitado caso todas as verificações a seguir sejam atendidas.

- O input com o "nome do serviço" deve estar preenchido.
- O input com o "login" deve estar preenchido.
- O input com a "senha" deve estar preenchido.
  - A senha deve ter no mínimo 8 caracteres.
  - A senha deve ter no máximo 16 caracteres.
  - A senha deve ter letras e números.
  - A senha deve ter algum caractere especial.

Caso alguma das verificações acima não seja atendida, o botão `Cadastrar` deverá estar desabilitado.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - O botão "Cadastrar" deve estar desabilitado se nenhum campo do formulário for preenchido.
  - O botão "Cadastrar" deve estar desabilitado caso o campo "Nome do serviço" não esteja preenchido.
  - O botão deve estar desabilitado caso o campo "Login" não esteja preenchido.
  - O botão deve estar desabilitado caso a senha tenha menos de 8 caracteres.
  - O botão deve estar desabilitado caso a senha tenha mais de 16 caracteres.
  - O botão deve estar desabilitado caso a senha não contenha números.
  - O botão deve estar desabilitado caso a senha não contenha letras.
  - O botão deve estar desabilitado caso a senha não contenha caracteres especiais.
  - O botão deve estar habilitado caso todos os campos estejam preenchidos corretamente.

</details>

---

## 5 - Crie um display para a validação da senha

Quando o formulário for renderizado, as seguintes mensagens também deverão ser renderizadas na tela:

- "Possuir 8 ou mais caracteres".
- "Possuir até 16 caracteres".
- "Possuir letras e números".
- "Possuir algum caractere especial".

Os elementos podem ser renderizados em qualquer lugar da página, com qualquer tag html, desde que estejam visíveis.

Para cada mensagem, você deverá verificar se o que está sendo digitado no _input_ com a label `Senha` atende à respectiva verificação. Caso a verificação seja atendida, o elemento com o texto deverá receber o atributo `className="valid-password-check"`. Caso contrário, o elemento que contém o texto deverá receber o atributo `className="invalid-password-check"`.

Por exemplo, caso a senha digitada seja "@Senha", os elementos deverão apresentar as seguintes classes:

- "Possuir 8 ou mais caracteres": `invalid-password-check`.
- "Possuir até 16 caracteres": `valid-password-check`.
- "Possuir letras e números": `invalid-password-check`.
- "Possuir algum caractere especial": `valid-password-check`.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - Renderiza a mensagem "Possuir 8 ou mais caracteres" com a classe "valid-password-check" caso a senha tenha 8 ou mais caracteres.
  - Renderiza a mensagem "Possuir 8 ou mais caracteres" com a classe "invalid-password-check" caso a senha tenha menos de 8 caracteres.
  - Renderiza a mensagem "Possuir até 16 caracteres" com a classe "valid-password-check" caso a senha tenha 16 caracteres ou menos.
  - Renderiza a mensagem "Possuir até 16 caracteres" com a classe "invalid-password-check" caso a senha tenha mais de 16 caracteres.
  - Renderiza a mensagem "Possuir letras e números" com a classe "valid-password-check" caso a senha tenha letras e números.
  - Renderiza a mensagem "Possuir letras e números" com a classe "invalid-password-check" caso a senha não tenha letras e números.
  - Renderiza a mensagem "Possuir algum caractere especial" com a classe "valid-password-check" caso a senha tenha caractere especial.
  - Renderiza a mensagem "Possuir algum caractere especial" com a classe "invalid-password-check" caso a senha não tenha caractere especial.

</details>

---

## 6 - Implemente a função do botão "Cadastrar" do formulário

Implemente a função "Cadastrar" do formulário, de modo que a aplicação liste todos os serviços cadastrados.

- Se nenhum serviço estiver cadastrado, a mensagem "Nenhuma senha cadastrada" deverá ser renderizada na tela.
- Ao clicar no botão "Cadastrar" do formulário, as informações do serviço deverão ser renderizadas da seguinte forma:
  - O `Nome do serviço` deverá ser renderizado dentro de um `link` que, quando clicado, deverá direcionar a pessoa usuária para a `URL` cadastrada.
  - O `Login` cadastrado deverá ser renderizado em uma tag exclusiva para ele.
  - A `Senha` cadastrada deverá ser renderizada em uma tag exclusiva para ela e estar visível.
- Deve ser possível cadastrar mais de um serviço.
- Ao cadastrar um novo serviço, este deve aparecer ao final da lista.
- Após cadastrar um novo serviço:
  - o formulário deverá desaparecer.
  - o botão com o texto "Cadastrar nova senha" deverá ser renderizado.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - Caso não exista nenhum serviço cadastrado, a mensagem "nenhuma senha cadastrada" deverá ser renderizada.
  - Ao clicar no botão, as informações enviadas pelo formulário deverão ser renderizadas na tela.
  - A aplicação deve renderizar todos os serviços cadastrados na ordem esperada.
  - Se algum serviço estiver cadastrado, a mensagem "nenhuma senha cadastrada" deverá desaparecer.
  - Se após cadastrar um serviço o botão com o texto "Cadastrar nova senha" volta a ser exibido.

</details>

---

## 7 - Permita apagar um serviço cadastrado

Para cada serviço cadastrado, adicione um botão que, ao ser clicado, remove da lista o serviço correspondente. Esse botão deve ter o atributo `data-testid="remove-btn"`.

Caso todos os serviços cadastrados sejam removidos, a mensagem "Nenhuma senha cadastrada" deverá ser renderizada.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - Cada serviço cadastrado deverá ter um botão com o atributo data-testid="remove-btn".
  - Ao clicar no botão, o serviço correspondente deve ser removido.
  - Se todos os serviços forem removidos, a mensagem "nenhuma senha cadastrada" deve ser renderizada.

</details>

---

## 8 - Implemente um checkbox para esconder/mostrar as senhas

A aplicação deve renderizar um input do tipo checkbox e que tenha uma label com o texto "Esconder senhas". Esse checkbox deve começar desmarcado.

- Com o checkbox desmarcado, todas as senhas cadastradas devem estar visíveis.
- Com o checkbox marcado, todas as senhas cadastradas devem estar "escondidas", renderizando exatamente o seguinte texto: `******`.

O checkbox pode ser implementado em qualquer lugar da aplicação.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - A aplicação deve ter um input do tipo checkbox com o texto "Esconder senhas" como label e começar desmarcado.
  - Com o checkbox marcado, todas as senhas cadastradas deverão ser substituídas por `******`.
  - Ao clicar para desmarcar o checkbox, todas as senhas cadastradas devem voltar a aparecer.

</details>

# Requisitos bônus

## 9 - No formulário, implemente um botão para esconder/mostrar a senha que está sendo digitada

Crie outro botão no formulário:

- Adicione o atributo `data-testid="show-hide-form-password"`.
- Ao ser clicado, o _input_ com a label `Senha` deverá ter seu tipo alterado de _"password"_ para _"text"_, de modo que a senha fique visível.
- Ao ser clicado, caso o _input_ esteja com o tipo _"text"_, seu tipo deve ser alterado para _"password_, de modo que a senha fique escondida.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - O formulário deve ter um botão que contenha o atributo data-testid="show-hide-form-password".
  - Ao clicar no botão, o input correspondente à senha deverá ter seu tipo alterado para "text".
  - Se o input de senha estiver com o tipo "text", ao clicar no botão, seu tipo deverá ser alterado para "password".

</details>

## 10 - Exibe um alerta ao cadastrar um novo serviço corretamente

Ao clicar no botão "Cadastrar" do formulário, utilize a biblioteca [sweetalert2](https://sweetalert2.github.io/) para mostrar um alerta que informe à pessoa usuária que um novo serviço foi cadastrado.

O alerta deverá:
  - Desaparecer após 1500ms (1.5 segundo).
  - Mostrar a mensagem "Serviço cadastrado com sucesso".

<details>
  <summary><strong>O que será verificado</strong></summary><br />

  - Ao cadastrar uma senha, exibe um "sweet alert" com o texto "Serviço cadastrado com sucesso".
  - Após clicar no botão, o alerta deve permanecer na tela por apenas 1.5s.

</details>

<br>

*Exercicíos criado pela [Trybe](htpps:www.betrybe.com/).

<br>
