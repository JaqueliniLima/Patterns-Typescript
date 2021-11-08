# SOLID

Código mais flexivel, reusavel e robusto

### Single Responsability Principle (SRP)
Devemos separar as coisas que mudam por motivos diferentes e nesse contexto a palavra responsabilidade significa motivo para mudar.

### Open Closed Principle (OCP)
Os componentes da arquitetura devem estar abertos para extensão e fechados para modificação.

* Sem acumulo de funções
* Delegam responsabilidades
* Segue o SRP

### Liskov Substitution Principle (LSP)
(poder substituir sem quebrar a expectativa do programa)

Se S é uma subclasse (Beer, Whisky, Water) de T (Item), então objetos do tipo T PODEM ser substituidos por objetos de S sem quebrar o funcionamento do programa (não é só lançar exception)

* Pré-condições não podem ser fortalecidas 
* Pós-condições não podem ser enfraquecidas (devolver algo diferente, lançar uma exception por exemplo)
* Invariantes devem ser preservados no subtipo (estado interno)

### Interface Segregation Principle (ISP)

Uma subclasse NÃO DEVERIA IMPLEMEMTAR METODOS QUE ELA NÃO USA, quebre em interfaces menores (não necessariamente INTERFACE em si, no sentido de contratos, mas sim algo mais relacionado com abstrações)

is-a (é um) Beer é um Item
has-a (tem um) Pessoa tem CPF

### Dependency Inversion Principle (DIP)

é a base do desacoplamento permitindo intercambiar dependências de acordo com a necessidade, facilitando os testes e a evolução com o passar do tempo
modulos de alto nivel não podem depender de modulos de mais baixo nivel
regra de negocios não podem depender de banco de dados, frameworks e afins

não saber quem esta sendo enviado por meio de contratos (interfaces)


# Design Patterns

### Command (Action, Transaction )

* Encapsular uma solicitação como um objeto
* Permitir que clientes diferentes, parametrizem comandos de forma diferente
* Enfileirar ou fazer o registro das solicitações
* Suportar operações que podem ser desfeitas