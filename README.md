# Fipe Car Manager
O Fipe Car Manager é uma aplicação inovadora projetada para simplificar o gerenciamento de veículos. Ao integrar-se com uma API especializada, a plataforma oferece uma experiência completa, permitindo aos usuários acessar informações precisas sobre a Tabela Fipe diretamente ao adicionar um novo veículo. Esta integração simplifica significativamente o processo de inserção de dados, garantindo que os valores estejam sempre atualizados e precisos.

Além disso, o Fipe Car Manager oferece uma funcionalidade adicional que proporciona aos usuários um registro detalhado de suas transações automotivas. Com a capacidade de registrar a data e o preço de venda de um veículo, os usuários podem manter um histórico preciso de suas vendas, oferecendo uma visão abrangente de suas atividades automotivas ao longo do tempo.

O frontend da aplicação foi desenvolvido com Angular, juntamente com o Framework CSS Bootstrap, em sua versão 5.3.
O backend da aplicação foi simulado por uma API Fake usando o Json Server.

## Endereço de Deploy - GitHub Pages

## Protótipo
O protótipo da aplicação foi realizado na ferramenta Figma e pode ser acessado pelo link abaixo.
https://www.figma.com/design/5OF0EotkzTxRrBZN1YuKnd/Fipe-Car-Manager?node-id=0-1&t=m6Az5I3cHpuX0Jah-0

## Manual de Execução
A aplicação está em total funcionamento no GitHub Pages, porém se quiser rodar a aplicação em seu ambiente local siga essa lista de passos:

- Clonar o repositório com `git clone`
- Abrir o projeto no editor Visual Studio Code
- Abrir um terminal pelo VSCode ou qualquer terminal do seu Sistema Operacional apontando para o diretório raiz do projeto
- Instalar as dependências contidas no `package.json`
  - Comando: `npm i`
- Execute para iniciar o Json Server e fazer o build da aplicação
 - Comando: `npm run initialize`
 - Acessar: http://localhost:4200

## Checklist

RA1 - Prototipar e projetar interfaces gráficas de usuário, considerando princípios de usabilidade e experiência do usuário.
  - [X] ID1: O aluno desenvolveu protótipos de interfaces que demonstram compreensão das diretrizes de usabilidade.
  - [X] ID2: O aluno projetou interfaces responsivas que se adaptam a diferentes tamanhos de tela.

RA2 - Criar e reutilizar componentes em frameworks frontend, desenvolvendo interfaces modulares, responsivas e estilizadas.
  - [X] ID3: O aluno desenvolveu componentes reutilizáveis que são aplicáveis em diferentes contextos da aplicação, garantindo que se adaptem de maneira responsiva em vários tamanhos de tela.
  - [X] ID4: O aluno incorporou componentes de frameworks CSS para aprimorar a aparência e funcionalidade da aplicação de maneira consistente.
  - [X] ID5: O aluno aplicou diretivas estruturais para renderizar elementos de forma condicional, permitindo a exibição ou ocultação de conteúdo com base em condições dinâmicas.
  - [X] ID6: O aluno utilizou diretivas estruturais para repetir elementos de interface de maneira dinâmica, a fim de criar listas, galerias ou outras visualizações baseadas em conjuntos de dados.
  - [X] ID7: O aluno aplicou Pipes de maneira eficaz para formatar a apresentação de dados, garantindo que as informações exibidas sejam legíveis, esteticamente agradáveis e atendam aos requisitos de apresentação específicos para cada contexto.

RA3 - Sincronizar dados entre a interface gráfica e o modelo de dados, aplicando técnicas de binding para manter a consistência.
  - [X] ID8: O aluno demonstrou a compreensão e a aplicação de técnicas de one-way data binding, como Interpolation e Property Binding, para exibir e atualizar dados na interface gráfica de maneira unidirecional.
  - [X] ID9: O aluno demonstrou a aplicação de técnicas de event binding para capturar eventos do usuário na interface e interagir com o modelo de dados, mantendo a consistência e a sincronização entre os dois.
  - [X] ID10: O aluno implementou a técnica de two-way data binding para criar uma sincronização bidirecional automática entre a interface e o modelo de dados, permitindo uma atualização eficiente dos dados em ambos os lados.
  - [X] ID11: O aluno fez uso eficaz de variáveis de template para manipulação dinâmica dos dados na interface gráfica, demonstrando a capacidade de exibir informações de maneira flexível e adaptável.

RA4 - Implementar comunicação eficaz entre componentes, utilizando padrões de comunicação e serviços para compartilhar lógica e dados.
  - [X] ID12: O aluno criou comunicação entre componentes não relacionados hierarquivamente por meio de serviços através do mecanismo de injeção de dependência, compartilhando lógica ou informações.
  - [X] ID13: O aluno utilizou efetivamente as diretivas @Input e @Output para estabelecer uma comunicanção em uma hierarquia de componentes, passando e recebendo dados entre componentes de maneira segura e consistente.

RA5 - Criar interfaces de navegação intuitivas e responsivas, implementando roteamento em aplicações de página única (SPA).
  - [X] ID14: O aluno configurou rotas para diferentes partes da aplicação, permitindo a navegação entre páginas distintas.
  - [X] ID15: O aluno demonstrou a habilidade de passar dados entre componentes que representam diferentes telas usando parâmetros de rotas, garantindo uma troca eficiente de informações.
  - [X] ID16: O aluno criou uma estrutura de navegação aninhada para representar hierarquias de conteúdo.
  - [X] ID17: O aluno aplicou guardas de rotas para controlar o acesso a rotas específicas da aplicação, assegurando que somente usuários autorizados possam acessar determinadas partes da interface.

RA6 - Realizar requisições assíncronas para serviços web, compreendendo os protocolos e formatos de troca de dados, tratando respostas e erros.
  - [X] ID18: O aluno fez requisições assíncronas a uma API simulada, compreendendo os protocolos HTTP e formatos de dados para as operações GET, POST, PUT, PATCH e DELETE.
  - [X] ID19: O aluno tratou respostas de sucesso e erros das requisições assíncronas de forma apropriada.
  - [X] ID20: O aluno aplicou validações de entrada nos campos do formulário, utilizando técnicas como expressões regulares (REGEX), e apresentou mensagens de erro claras e informativas para auxiliar os usuários a corrigir entradas incorretas.
  - [X] ID21: O aluno desabilitou adequadamente o botão de submit enquanto o formulário continha campos inválidos, promovendo uma experiência de usuário mais intuitiva e evitando a submissão de dados incorretos.
  - [X] ID22: O aluno demonstrou a capacidade de utilizar Promises e Observables para tratar respostas assíncronas.

RA7 - Gerenciar o código-fonte de maneira eficiente, implementar boas práticas de controle de versão e colaborar em projetos de desenvolvimento.
  - [X] ID23: O aluno criou um repositório no GitHub utilizando a estrutura do Gitflow, estabelecendo as branches "main" e "develop", demonstrando proficiência em boas práticas de controle de versão e organização do projeto.
  - [X] ID24: O aluno colaborou de maneira efetiva com outros membros do projeto, realizando fusões (merges) e resolução de conflitos de código de forma adequada e alinhada às práticas de desenvolvimento colaborativo.
  - [X] ID25: O aluno planejou, configurou e executou o processo de build da aplicação, preparando-a para produção e realizou o deploy em um ambiente de hospedagem, tornando-a prontamente acessível para uso.
