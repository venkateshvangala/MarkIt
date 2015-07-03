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
  val mapId: Integer = 0;

  @Column(name = "label_id")
  val labelId: Integer = null;

  @Column(name = "task_id")
  val taskId: String = null;

  @Column(name = "user_id")
  val userId: Long = 0;
}