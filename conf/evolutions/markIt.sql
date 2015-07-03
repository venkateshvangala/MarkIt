CREATE TABLE task (
  taskId int(11) NOT NULL AUTO_INCREMENT,
  title varchar(60) NOT NULL,
  description varchar(150) DEFAULT NULL,
  status varchar(45) DEFAULT NULL,
  createDate timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  startDate timestamp NULL DEFAULT NULL,
  endDate timestamp NULL DEFAULT NULL,
  createdBy bigint(20) DEFAULT NULL,
  PRIMARY KEY (taskId),
  KEY fk_task_1_idx (createdBy),
  CONSTRAINT fk_task_1 FOREIGN KEY (createdBy) REFERENCES mi_user (user_id) ON DELETE NO ACTION ON UPDATE NO ACTION
); 


CREATE TABLE User_Accessibility (
  accessibilityId int(11) NOT NULL AUTO_INCREMENT,
  taskId int(11) DEFAULT NULL,
  assignedBy bigint(20) DEFAULT NULL,
  assignedTo bigint(20) DEFAULT NULL,
  assignedDate timestamp NULL DEFAULT NULL,
  PRIMARY KEY (accessibilityId),
  KEY fk_User_Accessibility_1_idx (assignedBy,assignedTo),
  KEY fk_User_Accessibility_2_idx (taskId),
  KEY fk_User_Accessibility_1_idx1 (assignedTo),
  CONSTRAINT fk_User_Accessibility_1 FOREIGN KEY (assignedTo) REFERENCES mi_user (user_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_User_Accessibility_2 FOREIGN KEY (taskId) REFERENCES task (taskId) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_User_Accessibility_3 FOREIGN KEY (assignedBy) REFERENCES mi_user (user_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);


CREATE TABLE label_master (
  labelId int(11) NOT NULL AUTO_INCREMENT,
  name varchar(45) NOT NULL,
  description varchar(45) DEFAULT NULL,
  ownerId bigint(20) DEFAULT NULL,
  PRIMARY KEY (labelId),
  KEY fk_label_master_1_idx (ownerId),
  CONSTRAINT fk_label_master_1 FOREIGN KEY (ownerId) REFERENCES mi_user (user_id) ON DELETE NO ACTION ON UPDATE NO ACTION
) ;


CREATE TABLE label_map (
  mapId int(11) NOT NULL AUTO_INCREMENT,
  labelId int(11) DEFAULT NULL,
  taskId int(11) DEFAULT NULL,
  userId bigint(20) DEFAULT NULL,
  PRIMARY KEY (mapId),
  KEY fk_label_map_1_idx (userId),
  KEY fk_label_map_2_idx (labelId),
  KEY fk_label_map_3_idx (taskId),
  CONSTRAINT fk_label_map_1 FOREIGN KEY (userId) REFERENCES mi_user (user_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_label_map_2 FOREIGN KEY (labelId) REFERENCES label_master (labelId) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_label_map_3 FOREIGN KEY (taskId) REFERENCES task (taskId) ON DELETE NO ACTION ON UPDATE NO ACTION
);



