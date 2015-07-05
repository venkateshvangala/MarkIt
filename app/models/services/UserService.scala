package models.services

import play.api.Logger
import models.data.User
import com.avaje.ebean.Ebean
import org.apache.shiro.authc.UsernamePasswordToken
import org.apache.shiro.SecurityUtils
import javax.security.sasl.AuthenticationException

/**
 * @author venkateshv
 */

object UserService extends GenericService(classOf[User]) {

  def update(user: User): Unit = {
    Ebean.update(user);
  }

  def findByEmail(email: String): User = {
    finder.where().eq("email", email).findUnique();
  }

  def authenticate(email: String, password: String): Boolean = {
    val token = new UsernamePasswordToken(email, password);
    token.setRememberMe(true);
    val currentUser = SecurityUtils.getSubject;
    try {
      currentUser.login(token);
      true;
    } catch {
      case e: AuthenticationException => false;
    }
  }
}