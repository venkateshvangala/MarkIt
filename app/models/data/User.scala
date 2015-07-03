package models.data

import javax.persistence._
import java.sql.Timestamp

/**
 * @author venkateshv
 */

@Entity
@Table(name = "mi_user")
class User {

  @Id
  @GeneratedValue
  @Column(name = "user_id")
  val _userId: Long = 0;

  @Column(name = "display_name")
  var _displayName: String = null;

  @Column(name = "email")
  var _email: String = null;

  @Column(name = "password")
  var _password: String = null;

  @Column(name = "mobile")
  var _mobile: String = null;

  @Column(name = "first_name")
  var _firstName: String = null;

  @Column(name = "last_name")
  var _lastName: String = null;

  @Column(name = "gender")
  var _gender: String = null;

  @Column(name = "age")
  var _age: Int = 0;

  @Column(name = "role")
  var _role: String = null;

  @Column(name = "last_updated")
  var _lastUpdated: Timestamp = null;

  @Column(name = "updated_by")
  var _updatedBy: String = null;

  @Column(name = "created_by")
  var _createdBy: String = null;

  @Column(name = "date_created")
  var _dateCreated: Timestamp = null;

  def userId = _userId; 

  def displayName = _displayName;
  def displayName_=(value: String): Unit = _displayName = value

  def email = _email;
  def email_=(value: String): Unit = _email = value

  def password = _password;
  def password_=(value: String): Unit = _password = value

  def mobile = _mobile;
  def mobile_=(value: String): Unit = _mobile = value

  def firstName = _firstName;
  def firstName_=(value: String): Unit = _firstName = value

  def lastName = _lastName;
  def lastName_=(value: String): Unit = _lastName = value

  def gender = _gender;
  def gender_=(value: String): Unit = _gender = value

  def  age = _age;
  def age_=(value: Int): Unit = _age = value

  def role = _role;
  def role_=(value: String): Unit = _role = value

  def lastUpdated = _lastUpdated;
  def lastUpdated_=(value: Timestamp): Unit = _lastUpdated = value

  def updatedBy = _updatedBy;
  def updatedBy_=(value: String): Unit = _updatedBy = value

  def createdBy = _createdBy;
  def createdBy_=(value: String): Unit = _createdBy = value

  def dateCreated = _dateCreated;
  def dateCreated_=(value: Timestamp): Unit = _dateCreated = value

}