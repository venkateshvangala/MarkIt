package models.data

import javax.persistence._
import java.sql.Timestamp

/**
 * @author venkateshv
 */

@Entity
@Table(name = "label_map")
class User {

  @Id
  @GeneratedValue
  @Column(name = "map_id")
  val mapId: int = 0;

  @Column(name = "label_id")
  val labelId: int = null;

  @Column(name = "task_id")
  val taskId: String = null;

  @Column(name = "user_id")
  val userId: Long = null;
}