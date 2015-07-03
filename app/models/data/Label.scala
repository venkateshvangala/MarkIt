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
  val _labelId: Integer = 0;

  @Column(name = "name")
  var _name: String = null;

  @Column(name = "description")
  var _description: String = null;

  @Column(name = "owner_id")
  var _ownerId: Long = 0;

  def labelId = _labelId;

  def name = _name;
  def name_=(value: String): Unit = _name = value

  def description = _description;
  def description_=(value: String): Unit = _description = value

  def ownerId = _ownerId;
  def ownerId_=(value: Long): Unit = _ownerId = value

}