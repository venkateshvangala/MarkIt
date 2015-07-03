package models.data

import javax.persistence._
import java.sql.Timestamp

/**
 * @author venkateshv
 */

@Entity
@Table(name = "label_master")
class Label {

  @Id
  @GeneratedValue
  @Column(name = "label_id")
  val labelId: Integer = 0;

  @Column(name = "name")
  val name: String = null;

  @Column(name = "description")
  val description: String = null;

  @Column(name = "owner_id")
  val ownerId: Long = 0;
}