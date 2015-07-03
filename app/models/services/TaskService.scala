package models.services

import play.api.Logger
import models.data._
import com.avaje.ebean.Ebean
import org.apache.shiro.authc.UsernamePasswordToken
import org.apache.shiro.SecurityUtils
import javax.security.sasl.AuthenticationException

/**
 * @author venkateshv
 */

object TaskService extends GenericService(classOf[Task]) {

  def update(task: Task): Unit = {
    Ebean.update(task);
  }
}