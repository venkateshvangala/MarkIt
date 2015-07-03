package models.data

import javax.persistence._
import java.sql.Timestamp

/**
 * @author venkateshv
 */

@Entity
@Table(name="mi_user")
class User {
  
    @Id
    @GeneratedValue
    @Column(name = "user_id")
    val userId: Long = 0;
    
    @Column(name = "display_name")
    val displayName: String = null;
    
    @Column(name = "email")
    val email: String = null;
    
    @Column(name = "password")
    val password: String = null;
    
    @Column(name = "mobile")
    val mobile: String = null;
    
    @Column(name = "first_name")
    val firstName: String = null;
    
    @Column(name = "last_name")
    val lastName: String = null;
    
    @Column(name = "gender")
    val gender: String = null;
    
    @Column(name = "age")
    val age: Int = 0;
    
    @Column(name = "role")
    val role: String = null;
    
    @Column(name = "last_updated")
    val lastUpdated: Timestamp = null;
    
    @Column(name = "updated_by")
    val updatedBy: String = null;
    
    @Column(name = "created_by")
    val createdBy: String = null;
    
    @Column(name = "date_created")
    val dateCreated: Timestamp = null;
    
}