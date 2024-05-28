## Sumário

[1. Visão Geral do Projeto](#c1)

[2. Análise do Problema](#c2)

[3. Requisitos do Sistema](#c3)

[4. Projeto de Banco de Dados](#c4)

[5. Requisitos da aplicação](#c5)

<br>

# <a name="c1"></a>1. Visão Geral do Projeto

<div align="justify">

## 1.1.	Parceiro de Negócios

&emsp;A Central da Solidariedade é uma organização não governamental, sem fins lucrativos ou vínculos político-partidários, ecumênica, que reúne entidades de promoção humana em Conselheiro Lafaiete e região. A ONG foi criada para coordenar, padronizar e manter um programa de promoção humana e assistência familiar junto aos necessitados do município de Conselheiro Lafaiete e região, por meio da distribuição organizada de cestas básicas, roupas e outros itens obtidos por doações da sociedade. 
&emsp;A Central da Solidariedade tem a iniciativa de apoiar pessoas que não possuem uma estabilidade financeira bem definida. Atualmente, esse apoio se manifesta por meio da distribuição de cestas básicas para os beneficiários de seus serviços. 
&emsp;Para ampliar essa iniciativa, a Central da Solidariedade decidiu unir forças com outras ONGs e utilizar mais recursos para aumentar a distribuição de pontos de ajuda. Cada uma dessas organizações fornece cestas básicas a pessoas que necessitam desses recursos essenciais, visto que muitas delas encontram-se em situações de instabilidade financeira, o que dificulta a aquisição de itens básicos da cesta básica.
## 1.2.	O Problema
&emsp;O problema identificado nesse processo reside na ocorrência de múltiplas coletas por parte de algumas pessoas, caracterizando a utilização de mais de uma (ONG) para obter cestas básicas. Essa prática comprometedora resulta em um desequilíbrio no acesso aos recursos, prejudicando aqueles que não recorreram a essa estratégia. A situação é agravada pelo fato de que, uma vez que algumas pessoas já foram atendidas por meio de uma ONG, outras que não adotaram essa abordagem enfrentam maiores dificuldades para garantir o acesso às cestas básicas, visto que estas já foram alocadas por outros beneficiários. Essa disparidade na distribuição dos recursos pode comprometer a eficácia do processo, evidenciando a necessidade de implementar medidas que evitem a duplicidade de coletas e assegurem uma distribuição mais equitativa e justa dos recursos disponíveis.
&emsp;No entanto, a criação de uma plataforma dedicada para facilitar o contato entre as organizações surge como uma estratégia muito importante para diminuir os desafios associados ao problema mencionado. Ao implementar uma plataforma eficiente, a Central da Solidariedade pode potencializar sua capacidade de transformação e colaboração social ao máximo. Essa solução não apenas simplificaria a coordenação entre as ONGs, mas também permitiria uma gestão mais eficaz dos recursos disponíveis, reduzindo significativamente as duplicidades nas coletas e garantindo uma distribuição mais equitativa das cestas básicas. Dessa forma, a plataforma não só atua como um facilitador prático, mas também fortalece a eficácia global do processo de assistência, promovendo uma abordagem mais justa e eficiente para atender às necessidades da comunidade.

</div>

## 1.3.	Objetivos

<div align="justify">

&emsp;O projeto tem como objetivo desenvolver um website para ajudar a Central da Solidariedade   no processo de visualização e verificação de beneficiários, melhorando, além da interação entre seus atendentes e usuários, a maximização de cestas básicas distribuídas. Para tal, o processo que ainda não possuía uma forma de verificação, o que não limitava a coleta de mais de uma cesta por beneficiário, poderá lidar com esses processos de forma mais eficaz.
&emsp;O projeto propõe a implementação de um site unificado para as ONGs parceiras, visando aprimorar a eficiência na distribuição de cestas básicas a indivíduos necessitados. Para superar o desafio de algumas pessoas adquirirem mais de uma cesta, o sistema incorporará medidas de controle. Cada beneficiário será atribuído a uma quota específica, assegurando uma distribuição mais equitativa. Além disso, serão introduzidos registros detalhados de distribuição, facilitando a identificação de duplicatas e fornecendo uma visão histórica para melhorar a transparência do processo. A solução não apenas centralizará os esforços das ONGs, mas também promoverá uma gestão mais eficaz dos recursos, garantindo que as cestas básicas alcancem aqueles que mais necessitam, promovendo assim um impacto social mais significativo.

</div>

### 1.3.1.	Objetivos gerais

<div align="justify">

&emsp;Os objetivos gerais do projeto incluem tornar os protocolos de controle de distribuição de cestas em ferramentas digitais, para que todos os dados sejam preenchidos e corretamente completos para melhor controle. Além disso, o projeto tem como objetivo facilitar o acesso à verificação das informações sobre os beneficiários, mesmo que os atendentes das ONGS tenham pouco letramento digital e acadêmico. 

</div>

### 1.3.2.	Objetivos específicos

<div align="justify">

- Desenvolvimento de Plataforma Digital: Criar e implementar uma plataforma digital intuitiva, permitindo que as ONGs registrem todas as informações relevantes durante o processo de distribuição de cestas básicas.
- Interface Simplificada: Garantir que a interface da plataforma seja projetada de maneira simplificada, visando facilitar o uso por atendentes com diferentes níveis de letramento digital, proporcionando uma transição suave para métodos digitais.
- Sistema de Verificação: Integrar um sistema de verificação que seja de fácil compreensão, permitindo que atendentes com pouca experiência digital possam acessar e verificar informações sobre os beneficiários de forma rápida e eficaz.

</div>

## 1.4.	Descritivo da Solução

<div align="justify">

&emsp;A proposta de solução consiste na criação de um site centralizado que integre todas as ONGs parceiras, proporcionando uma plataforma unificada para gerenciar e otimizar a distribuição de cestas básicas. Este site servirá como um hub central, permitindo a colaboração eficiente entre as diferentes organizações e simplificando a coordenação de esforços.
&emsp;Um dos principais recursos críticos do site será a capacidade de rastrear onde e registrar se um beneficiário já coletou uma cesta básica. Para garantir uma distribuição justa e evitar duplicatas, o sistema será projetado para atualizar dinamicamente o status de cada beneficiário. Isso permitirá que as ONGs acessem informações em tempo real sobre quem já recebeu assistência, evitando assim distribuições excessivas e promovendo uma alocação mais equitativa dos recursos disponíveis.
&emsp;Além disso, a interface do site será intuitiva e de fácil navegação, garantindo que as ONGs e seus voluntários possam acessar rapidamente as informações necessárias. A implementação de ferramentas de relatórios e análises também será considerada, proporcionando insights valiosos sobre padrões de distribuição e permitindo ajustes contínuos para otimizar a eficiência do programa.

**Funcionalidades**
-	Acessar cada um dos beneficiários unitariamente e conseguir mudar seu status de “não recebido” para “recebido” em relação às cestas básicas;
-	Acesso ao histórico de coleta de cestas pelos atendentes e visualização de qual local foi retirado;
-	Cadastro de novos usuários para o sistema de recebimento de cestas básicas;
-	Cadastro de novas ONGs que contribuirão para o projeto  

</div>

# <a name="c2"></a>2. Análise do Problema

<div align="justify">

&emsp;A avaliação da situação foi realizada empregando o Value Proposition Canvas e a Matriz SWOT. Essas ferramentas proporcionaram uma compreensão abrangente de vários aspectos da empresa, incluindo suas propostas e desafios. Essa abordagem permitiu aprofundar a análise, destacando elementos essenciais para uma compreensão mais holística da situação empresarial.

</div>

## 2.1.	Proposta de Valor: Value Proposition Canvas

<div align="justify">

&emsp;O Value Proposition Canvas é uma ferramenta que oferece uma representação visual das propostas de valor de uma empresa. Ele se divide em dois blocos principais: o Perfil do Cliente e o Mapa de Valor. O Perfil do Cliente identifica segmentos de clientes, seus trabalhos, dores e ganhos, enquanto o Mapa de Valor descreve as propostas de valor da empresa, destacando produtos ou serviços específicos, benefícios oferecidos e diferenciais em relação à concorrência. Essa abordagem fornece uma compreensão clara das interações entre a empresa e seus clientes, facilitando o desenvolvimento de estratégias alinhadas às expectativas do mercado. 

<div style="text-align:center;">

Figura:  02 - Canvas de Proposta de Valor do projeto

![ValuePropositionCanvas](https://github.com/InteliJR/ong-project/assets/123702733/38274448-5501-4a7b-91ea-a4703446b43d)

Fonte:  Inteli JR

</div>

</div>

# <a name="c3"></a>3.	Requisitos do Sistema

## 3.1.	Persona

<div align="justify">

&emsp;De acordo com Kotler e Keller, renomados especialistas em marketing, a construção de personas desempenha um papel crucial na segmentação de mercado e na criação de estratégias eficazes. Em suas obras, como "Administração de Marketing" (Kotler e Keller, 2016), destacam a importância de compreender o cliente ideal por meio da elaboração de personas, evidenciando como essa abordagem contribui para a personalização de produtos, serviços e mensagens, resultando em interações mais significativas e bem-sucedidas no mercado.

<div style="text-align:center;">

Figura:  03 – Persona 01

![Persona01-Leonardo](https://github.com/InteliJR/ong-project/assets/123702733/74b2b026-eeae-49e1-8d89-02ac36d7233b)


Fonte:  Inteli JR

</div>


<div style="text-align:center;">

Figura:  04 – Persona 02

![Persona02-Joana](https://github.com/InteliJR/ong-project/assets/123702733/101969c7-a6f4-4202-976c-8a8cf25d0919)

Fonte:  Inteli JR

</div>

</div>

# <a name="c4"></a>4. Projeto de Banco de Dados

<div align="justify">

&emsp;Desenvolver modelos conceituais, lógicos e físicos é muito importante na abstração de soluções complexas. O modelo conceitual serve como a base do processo, o que considera as concepções iniciais de um sistema de forma abstrata. Ele proporciona uma visão de alto nível e permite uma compreensão clara dos requisitos e objetivos do sistema antes de entrar nos detalhes técnicos. O modelo lógico traduz essa abstração em uma representação mais formal e estruturada, identificando as relações e interações entre os diferentes componentes do sistema. Já o modelo físico leva essas representações para a realidade, especificando os detalhes de implementação. Ao seguir essa abordagem em camadas, pode-se garantir uma análise abrangente e uma comunicação eficaz entre as partes interessadas para uma implementação eficiente, resultando em sistemas mais robustos e alinhados às necessidades reais.

</div>

## 4.1. Modelo Conceitual

<div align="justify">

&emsp;Um modelo conceitual é uma representação abstrata e simplificada de um sistema ou ideia que destaca os conceitos fundamentais e suas relações. Essa etapa inicial no processo de desenvolvimento de sistemas é muito importante para comunicar as ideias essenciais antes de entrar nos detalhes técnicos. O modelo conceitual fornece uma visão de alto nível, identificando os principais elementos e suas conexões, sem se preocupar com a implementação prática. Ele serve como um guia para a compreensão dos requisitos do sistema, facilitando a comunicação entre as partes interessadas e proporcionando uma base para a criação dos modelos lógicos e físicos subsequentes. A seguir, referencia-se o modelo conceitual desenvolvido para o projeto em questão.

<div style="text-align:center;">

Figura:  05 – Modelo Conceitual

![Modelo_Conceitual](https://github.com/InteliJR/ong-project/assets/123702733/6f21b2f8-91d7-487b-bfac-5c491bdb4d1b)

Fonte:  Inteli JR

</div>

</div>

## 4.2. Modelo Lógico

<div align="justify">

&emsp;O modelo lógico é uma extensão do modelo conceitual que representa uma versão mais detalhada e estruturada das relações e interações entre os elementos identificados na fase conceitual. Ele se concentra em traduzir os conceitos abstratos em uma representação mais formal, utilizando linguagens e notações específicas para descrever as regras e lógicas que regem o sistema. 
&emsp;Nessa fase, são identificados os processos, as entidades, os relacionamentos e as restrições que moldam a dinâmica do sistema. Ao criar um modelo lógico, os desenvolvedores conseguem capturar as complexidades do sistema de uma maneira mais precisa, o que facilita a transição para a fase de implementação. Essa camada intermédia é essencial para garantir que a visão conceitual seja traduzida de maneira coerente para uma estrutura mais técnica.

</div>

## 4.3 Modelo Fisico 

<div align="justify">

&emsp;Seguindo a linha do desenvolvimento do banco de dados, partimos para a confecção do modelo fisico, onde aqui são definidas o tipo de dado que é aplicavel a cada uma das colunas, definindoas por exemplo como número (INT), data (DATE), etc.

A seguir, a documentação em código de cada umas tabelas presentes dentro do banco de dados. 

Tabela: "familia"
```
CREATE TABLE familia (
    id_familia INT PRIMARY KEY,
    renda DECIMAL(10,2) NOT NULL,
    numero_pessoas INT NOT NULL
);
```

Tabela: "beneficiario"
```
CREATE TABLE beneficiario (
    id_beneficiario INT PRIMARY KEY,
    id_familia INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    data_nascimento DATE NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    idade INT NOT NULL,
    FOREIGN KEY (id_familia) REFERENCES familia(id_familia)
);
```

Tabela: "cesta_basica"
```
CREATE TABLE cesta_basica (
    id_cesta_basica INT PRIMARY KEY,
    id_ong INT NOT NULL,
    data_entrega DATE NOT NULL,
    hora_entrega TIME NOT NULL,
    FOREIGN KEY (id_ong) REFERENCES ong(id_ong)
);
```

Tabela: "ong"
```
CREATE TABLE ong (
    id_ong INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cnpj VARCHAR(18) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    logradouro VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    senha VARCHAR(255) NOT NULL
);
```

Tabela: "coleta"
```
CREATE TABLE coleta (
    id_coleta INT PRIMARY KEY,
    id_familia INT NOT NULL,
    id_cesta INT NOT NULL,
    data_coleta DATE NOT NULL,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_familia) REFERENCES familia(id_familia),
    FOREIGN KEY (id_cesta) REFERENCES cesta_basica(id_cesta_basica)
);
```

<div style="text-align:center;">

Figura:  06 – Modelo Lógico

![Modelo_Lógico](https://github.com/InteliJR/ong-project/assets/123702733/6c3bb2da-960c-4d13-8e63-4f799b182dea)

Fonte:  Inteli JR

</div>

</div>

</div>

# <a name="c5"></a>5. Requisitos da aplicação

<div align="justify">

&emsp;Os requisitos funcionais e não funcionais desempenham papéis cruciais no desenvolvimento de sistemas de software, delineando as características específicas e as qualidades abrangentes necessárias para atender às expectativas dos usuários e às demandas do ambiente operacional. Os requisitos funcionais especificam as funcionalidades diretas do sistema, descrevendo o que o software deve realizar, desde operações básicas até a interação com os usuários. Por outro lado, os requisitos não funcionais definem as propriedades mais amplas do sistema, como desempenho, segurança, usabilidade e escalabilidade, influenciando a eficácia global e a experiência do usuário. Ambos os conjuntos de requisitos colaboram para a criação de sistemas robustos, eficientes e capazes de atender às necessidades diversificadas dos usuários e às demandas do ambiente em que estão inseridos.

</div>

## 5.1. Requisitos funcionais

<div align="justify">

1. O sistema deve permitir o cadastro de novas Ongs pelo master
2. O sistema deve permitir o acesso para a pessoa responsável pela Ong.
3. O sistema deve permitir o acesso de master.
4. O sistema deve permitir que novos beneficiários sejam cadastrados, fornecendo informações como nome, endereço, e detalhes sobre sua situação financeira.
5. Possibilitar o registro de recursos disponíveis, como alimentos, roupas e itens essenciais, no sistema.
6. Permitir o cadastro das famílias beneficiárias com as informações de cada membro.
7. Permitir o acompanhamento do uso dos recursos, registrando quando e como foram distribuídos.
8. Permitir a visualização completa dos recursos entregues as famílias, bem como a quantidade de auxílios entregues hoje, número de pessoas volutárias.
9. Permitir a visualização dos dados registrados em formato de gráficos, de barras, linha.
10. Permitir a visualização do status do auxílio para cada família.
11. Permitir a visualização das informações das Ongs cadastradas.
12. Permitir a visualização com um filtro por 'dependência'.

</div>

## 5.2 Requisitos não funcionais

<div align="justify">

1. Implementar medidas de segurança, como autenticação para acessos sensíveis, para proteger os dados sensíveis das Ongs, beneficiários e voluntários.
2. Desenvolver uma interface intuitiva e de fácil navegação para garantir que usuários com diferentes níveis de habilidade possam utilizar o sistema de maneira eficaz.
3. Assegurar disponibilidade do sistema, minimizando o tempo de inatividade para garantir que as Ongs e os beneficiários possam acessar o sistema quando necessário.
4. Projetar o sistema de forma a ser escalável, permitindo a expansão para lidar com um aumento no número de Ongs, beneficiários e registros de recursos.
5. Garantir que o sistema seja compatível com diferentes navegadores web e dispositivos, para atender a uma variedade de usuários.
6. Projetar o sistema de maneira modular e documentada, facilitando a manutenção e implementação de futuras atualizações.
7. Garantir a conformidade com regulamentações de privacidade, protegendo as informações pessoais dos beneficiários e outras partes envolvidas.
8. Certificar-se de que a aplicação seja responsiva e ofereça uma boa experiência de usuário em dispositivos móveis, facilitando o acesso em qualquer lugar.

</div>

# <a name="c6"></a>6. Representação visual

## 6.1. Wireframe

<div align="justify">

Um wireframe é uma representação visual esquemática e simplificada de uma interface de usuário, composta por linhas, formas básicas e texto. Sua função primordial é destacar a estrutura e o layout da interface, excluindo detalhes visuais como cores e imagens. O propósito central do wireframe é comunicar a arquitetura e a organização funcional da interface, permitindo que designers e stakeholders compreendam facilmente a disposição dos elementos, a hierarquia da informação e a experiência do usuário antes do desenvolvimento completo. Essa etapa é crucial no processo de design, pois estabelece uma base sólida para a criação de interfaces intuitivas e eficazes. Além do wireframe, o projeto incorporou uma abordagem de alta fidelidade utilizando o Figma para representar todos os insights de forma mais detalhada. A seguir, serão apresentadas as telas correspondentes.

### Fluxo de usuários

A solução abrange dois tipos distintos de usuários: o administrador e o mestre. O administrador tem acesso a todas as informações do banco de dados, incluindo insights gerais, enquanto o mestre tem controle exclusivo sobre sua própria organização não governamental (ONG). Portanto, na maioria dos casos, os usuários têm acesso como administradores.

Esse fluxo é iniciado através da tela de login, que separa o usuário de acordo com seu perfil no banco de dados, como apresentado a seguir:

<div style="text-align:center;">

Figura:  07 - Tela de Login

![Wireframe01](https://github.com/InteliJR/ong-project/assets/123702733/2b823ad6-d2a6-43fa-bba9-177ebc506b09)

Fonte:  Inteli JR

</div>

### Tela Inicial

A tela inicial apresenta informações simples exibidas por meio de uma dashboard e uma tabela de visualização rápida para verificar se algum beneficiário já recebeu alguma cesta básica.

<div style="text-align:center;">

Figura:  08 – Tela inicial Master

![Wireframe02](https://github.com/InteliJR/ong-project/assets/123702733/8d26ec47-b06a-4826-b74b-2f8437c4120b)

Fonte:  Inteli JR

<div style="text-align:center;">

Figura:  09 – Tela inicial Admin

![Wireframe03](https://github.com/InteliJR/ong-project/assets/123702733/03c26ea0-36ce-4824-85f4-8fc797826860)

Fonte:  Inteli JR

</div>

</div>

### Tela Inicial | Visualização Avançada

Essas telas representam insights avançados coletados pelas entregas feitas, CEPs que foram acessados e outras informações que podem fornecer dados relevantes.

<div style="text-align:center;">

Figura:  10 – Tela inicial Avançada Master

![Wireframe04](https://github.com/InteliJR/ong-project/assets/123702733/f426c6ba-09c3-4c9e-9ca3-af34e7658685)

Fonte:  Inteli JR

</div>

<div style="text-align:center;">

Figura:  11 – Tela inicial Avançada Admin

![Wireframe05](https://github.com/InteliJR/ong-project/assets/123702733/b61fa47c-aa43-457c-a506-1a08aebbfac7)

Fonte:  Inteli JR

</div>

### Buscar Famílias

Nessa tela, o projeto busca inserir uma tabela que permite o acesso a cada família individualmente. Dessa forma, o recebimento e a entrega de cestas podem ser realizados de forma dinâmica e funcional, proporcionando uma gestão mais eficiente e detalhada das operações.

<div style="text-align:center;">

Figura:  12 – Tabela de visualização Master

![Wireframe06](https://github.com/InteliJR/ong-project/assets/123702733/784a0a13-ecee-41a4-b196-571f7c5b786a)

Fonte:  Inteli JR

</div>

<div style="text-align:center;">

Figura:  13 – Tabela de visualização Admin

![Wireframe07](https://github.com/InteliJR/ong-project/assets/123702733/c4a20c47-f262-493a-9f21-8a699123c608)

Fonte:  Inteli JR

</div>

### Buscar Ongs

A partir dessa tela, o Master poderá visualizar todas as ONGs registradas no banco de dados, permitindo-lhe ter controle total sobre os processos em andamento. Essa funcionalidade oferece uma visão abrangente e centralizada, facilitando a gestão e a supervisão das atividades das diferentes organizações cadastradas.

<div style="text-align:center;">

Figura:  14 – Visualização das ONGs

![Wireframe08](https://github.com/InteliJR/ong-project/assets/123702733/b3138caa-d29e-4700-a461-952c8e911523)

Fonte:  Inteli JR

</div>






