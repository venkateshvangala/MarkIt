CREATE TABLE task (
  task_id int(11) NOT NULL AUTO_INCREMENT,
  title varchar(60) NOT NULL,
  description varchar(150) DEFAULT NULL,
  status varchar(45) DEFAULT NULL,
  create_date timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  start_date timestamp NULL DEFAULT NULL,
  end_date timestamp NULL DEFAULT NULL,
  created_by bigint(20) DEFAULT NULL,
  PRIMARY KEY (task_id),
  KEY fk_task_1_idx (created_by),
  CONSTRAINT fk_task_1 FOREIGN KEY (created_by) REFERENCES mi_user (user_id) ON DELETE NO ACTION ON UPDATE NO ACTION
); 


CREATE TABLE user_accessibility (
  accessibility_id int(11) NOT NULL AUTO_INCREMENT,
  task_id int(11) DEFAULT NULL,
  assigned_by bigint(20) DEFAULT NULL,
  assigned_to bigint(20) DEFAULT NULL,
  assigned_date timestamp NULL DEFAULT NULL,
  PRIMARY KEY (accessibility_id),
  KEY fk_user_accessibility_1_idx (assigned_by,assigned_to),
  KEY fk_user_accessibility_2_idx (task_id),
  KEY fk_user_accessibility_1_idx1 (assigned_to),
  CONSTRAINT fk_user_accessibility_1 FOREIGN KEY (assigned_to) REFERENCES mi_user (user_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_user_accessibility_2 FOREIGN KEY (task_id) REFERENCES task (task_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_user_accessibility_3 FOREIGN KEY (assigned_by) REFERENCES mi_user (user_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);


CREATE TABLE label_master (
  label_id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(45) NOT NULL,
  description varchar(45) DEFAULT NULL,
  owner_id bigint(20) DEFAULT NULL,
  PRIMARY KEY (label_id),
  KEY fk_label_master_1_idx (owner_id),
  CONSTRAINT fk_label_master_1 FOREIGN KEY (owner_id) REFERENCES mi_user (user_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ;


CREATE TABLE label_map (
  map_id int(11) NOT NULL AUTO_INCREMENT,
  label_id int(11) DEFAULT NULL,
  task_id int(11) DEFAULT NULL,
  user_id bigint(20) DEFAULT NULL,
  PRIMARY KEY (map_id),
  KEY fk_label_map_1_idx (user_id),
  KEY fk_label_map_2_idx (label_id),
  KEY fk_label_map_3_idx (task_id),
  CONSTRAINT fk_label_map_1 FOREIGN KEY (user_id) REFERENCES mi_user (user_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_label_map_2 FOREIGN KEY (label_id) REFERENCES label_master (label_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_label_map_3 FOREIGN KEY (task_id) REFERENCES task (task_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);



alter table task modify status int(11);
update task set status = 0;


commit;
