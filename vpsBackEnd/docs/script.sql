drop database if exists cursinho;
create database cursinho charset=UTF8 collate utf8_general_ci;

use cursinho;

create table alunos(
    id integer  auto_increment not null primary key,
    nome varchar(100) not null,
    nascimento varchar(10) not null
);
 
create table cursos(
    id integer  auto_increment not null primary key,
    curso varchar(100) not null,
    duracao numeric(8) not null
);
create table cursados(
    aluno integer not null ,
    curso integer not null,
    data varchar(10) not null,
    foreign key (aluno) references alunos(id) on delete cascade,
    foreign key (curso) references cursos(id) on delete cascade
 );

create view vw_cursados as
select a.id as id_aluno, a.nome, a.nascimento, c.id as id_curso, c.curso, c.duracao, cs.data  from alunos a
inner join cursados cs on cs.aluno = a.id
inner join cursos c on c.id = cs.curso;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/vps02pwbe/vpsBackEnd/docs/src/alunos.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/vps02pwbe/vpsBackEnd/docs/src/cursos.csv'
INTO TABLE cursos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/vps02pwbe/vpsBackEnd/docs/src/cursados.csv'
INTO TABLE cursados
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from alunos;
select * from cursos;
select * from cursados;
select * from vw_cursados;


