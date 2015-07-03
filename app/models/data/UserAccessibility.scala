package models.data

import javax.persistence._
import java.sql.Timestamp

/**
 * @author vinodkakarla
 */

@Entity
@Table(name="user_accessibility")
class UserAccessibility {

  @Id
  @GeneratedValue
  @Column(name = "accessibility_id")
  val _accessibilityId: Int = 0;

  @ManyToOne
  @JoinColumn(name = "task_id", insertable = false, updatable = false)
  var _task:Task = null;

  @ManyToOne
  @JoinColumn(name = "assigned_by", insertable = false, updatable = false)
  var _assignedBy:User = null;

  @ManyToOne
  @JoinColumn(name = "assigned_to", insertable = false, updatable = false)
  var _assignedTo:User = null;

  @Column(name = "assigned_date")
  var _assignedDate: Timestamp = null;
  
  
  def task = _task;
  def task_=(value: Task): Unit = _task = value
  
  def assignedBy = _assignedBy;
  def assignedBy_=(value: User): Unit = _assignedBy = value
  
  def assignedTo = _assignedTo;
  def assignedTo_=(value: User): Unit = _assignedTo = value
  
  def assignedDate = _assignedDate;
  def assignedDate_=(value: Timestamp): Unit = _assignedDate = value
  
}