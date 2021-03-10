<h1 align="center">
    <img alt="GoBarber" title="GoBarber" src=".github/Logo.png" />
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<br>

<!-- <p align="center">
  <img alt="Proffy" src=".github/proffy.png" width="100%">
</p> -->

## Tecnologias

- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)
- [JWT](https://jwt.io/)
- [Axios](https://github.com/axios/axios)
- [Yup](https://github.com/jquense/yup)
- [Date-fns](https://date-fns.org/)
- [Nodemailer](https://nodemailer.com/)
- [Docker](https://www.docker.com/)
- [Jest](https://jestjs.io/)
- [Multer](https://www.npmjs.com/package/multer)
- [BCrypt](https://www.npmjs.com/package/bcrypt)

## Projeto

GoBarber é uma plataforma em que clientes podem marcar horários com seu cabeleireiro de escolha. Ambos podem fazer seu cadastro na plataforma e por meio do <a href="https://github.com/Jeronymoo/gobarber-react">dashboard</a> os cabeleireiros podem visualizar a sua agenda e seus clientes com horário marcado.

## Instalação e Uso

Clone o repositório e faça a instalação dos pacotes do projeto
```bash
$ git clone https://github.com/Jeronymoo/gobarber-nodejs.git
$ cd gobarber-nodejs
$ yarn

# Caso utilize o npm
$ npm install
```
Faça a instalação do <a href="https://www.docker.com/">Docker</a> e crie imagens para o banco de dados PostgreSQL, MongoDB e para o Redis. Lembre-se de alterar os campos especificados no arquvivo disponibilizado ormconfig.json.example, renomeando para ormconfig.json

```bash
# Instalando a imagem do PostgreSQL
$ docker run --name gobarber-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Instalando a imagem do Redis
$ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

#Instalando a imagem do MongoDB
$ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo

# Com todos os containers sendo executados faça a criação das tabelas
$ yarn typeorm migration:run

# Inicie a API
$ yarn dev:server
```

## Licença

Esse projeto está sob a licença MIT.
