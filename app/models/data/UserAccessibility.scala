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
  val accessibilityId: Int = 0;

  @ManyToOne
  @JoinColumn(name = "task_id", insertable = false, updatable = false)
  val task:Task = null;

  @ManyToOne
  @JoinColumn(name = "assigned_by", insertable = false, updatable = false)
  val assignedBy:User = null;

  @ManyToOne
  @JoinColumn(name = "assigned_to", insertable = false, updatable = false)
  val assignedTo:User = null;

  @Column(name = "assigned_date")
  val assignedDate: Timestamp = null;

}