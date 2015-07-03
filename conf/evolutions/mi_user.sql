# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table mi_user (
  user_id                   bigint auto_increment not null,
  display_name              varchar(255),
  email                     varchar(255),
  password                  varchar(255),
  mobile                    varchar(255),
  first_name                varchar(255),
  last_name                 varchar(255),
  gender                    varchar(255),
  age                       integer,
  role                      varchar(255),
  last_updated              datetime,
  updated_by                varchar(255),
  created_by                varchar(255),
  date_created              datetime,
  constraint pk_mi_user primary key (user_id))
;




# --- !Downs

SET FOREIGN_KEY_CHECKS=0;

SET FOREIGN_KEY_CHECKS=1;





insert into mi_user(user_id, display_name, email, password, mobile, first_name, last_name, gender, age, role, last_updated, updated_by, created_by, date_created) values(1, "Venkatesh Kumar V", "venkatesh.vangala@imaginea.com", "pramati123", "9030750193", "Venkatesh", "Kumar", "Male", 25, "user", "2014-04-29 09:45:34", "Venkatesh Kumar", "Venkatesh Kumar", "2014-04-29 09:45:34");

commit;

