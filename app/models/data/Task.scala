package models.data

import javax.persistence._
import java.sql.Timestamp

/**
 * @author vinodkakarla
 */

@Entity
@Table(name="task")
class Task {

  @Id
  @GeneratedValue
  @Column(name = "task_id")
  val _taskId: Int = 0;

  @Column(name = "title")
  var _title: String = null;

  @Column(name = "description")
  var _description: String = null;

  @Column(name = "status")
  var _status: Int = 0;

  @Column(name = "create_date")
  var _createDate: Timestamp = null;

  @Column(name = "start_date")
  var _startDate: Timestamp = null;

  @Column(name = "end_date")
  var _endDate: Timestamp = null;

  @ManyToOne
  @JoinColumn(name = "created_by", insertable = false, updatable = false)
  var _createdBy:User = null;
  
  
  def taskId = _taskId; 
  
  def title = _title;
  def title_= (value:String):Unit =  _title = value
  
  def description = _description;
  def description_= (value:String):Unit =  _description = value

  def status = _status;
  def status_= (value:Int):Unit =  _status = value
  
  def createDate = _createDate;
  def createDate_= (value: Timestamp):Unit =  _createDate = value
  
  def startDate = _startDate;
  def startDate_= (value: Timestamp):Unit =  _startDate = value
  
  def endDate = _endDate;
  def endDate_= (value: Timestamp):Unit =  _endDate = value
  
  def createdBy = _createdBy;
  def createdBy_= (value: User):Unit =  _createdBy = value
   
}