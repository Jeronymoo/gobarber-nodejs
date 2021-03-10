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

## Projeto

GoBarber é uma plataforma em que clientes podem marcar horários com seu cabeleireiro de escolha. Ambos podem fazer seu cadastro na plataforma e por meio do <a href="#">dashboard</a> os cabeleireiros podem visualizar a sua agenda e seus clientes com horário marcado.

## Instalação e Uso

Clone o repositório e faça a instalação dos pacotes do projeto
```
$ git clone https://github.com/Jeronymoo/gobarber-nodejs.git
$ cd gobarber-nodejs
$ yarn
ou
$ npm install
```
Faça a instalação do <a href="#">Docker</a> e crie imagens para o banco de dados PostgreSQL, MongoDB e para o Redis. Lembre-se de alterar os campos especificados no arquvivo disponibilizado ormconfig.json.example, renomeando para ormconfig.json

Após de estar com o Docker e as imagens dos bancos de dados rodando faça a criação das tabelas
```
# Testando
$ yarn typeorm migration:run
```

## Licença

Esse projeto está sob a licença MIT.
