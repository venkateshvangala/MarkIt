package models.data

import javax.persistence._
import java.sql.Timestamp

/**
 * @author venkateshv
 */

@Entity
@Table(name = "label_map")
class LabelMap {

  @Id
  @GeneratedValue
  @Column(name = "map_id")
  val _mapId: Integer = 0;

  @Column(name = "label_id")
  var _labelId: Integer = null;

  @Column(name = "task_id")
  var _taskId: Integer = null;

  @Column(name = "user_id")
  var _userId: Long = 0;
  
  def labelId = _labelId;
  def labelId_=(value: Integer): Unit = _labelId = value
  
  def taskId = _taskId;
  def taskId_=(value: Integer): Unit = _taskId = value
  
  def userId_ = _userId;
  def userId_=(value: Long): Unit = _userId = value
}