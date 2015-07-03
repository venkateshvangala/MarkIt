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
  val taskId: Int = 0;

  @Column(name = "title")
  val title: String = null;

  @Column(name = "description")
  val description: String = null;

  @Column(name = "status")
  val status: String = null;

  @Column(name = "create_date")
  val createDate: Timestamp = null;

  @Column(name = "start_date")
  val startDate: Timestamp = null;

  @Column(name = "end_date")
  val endDate: Timestamp = null;

  @ManyToOne
  @JoinColumn(name = "created_by", insertable = false, updatable = false)
  val createdBy:User = null;

}