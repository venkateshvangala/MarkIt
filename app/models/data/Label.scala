package models.data

import javax.persistence._
import java.sql.Timestamp

/**
 * @author venkateshv
 */

@Entity
@Table(name = "label_master")
class User {

  @Id
  @GeneratedValue
  @Column(name = "label_id")
  val labelId: Long = 0;

  @Column(name = "name")
  val name: String = null;

  @Column(name = "description")
  val description: String = null;

  @Column(name = "owner_id")
  val ownerId: Long = null;
}