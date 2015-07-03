package models.services

import play.api.Logger
import models.data.Label
import com.avaje.ebean.Ebean
import org.apache.shiro.authc.UsernamePasswordToken
import org.apache.shiro.SecurityUtils
import javax.security.sasl.AuthenticationException

/**
 * @author venkateshv
 */

object LabelService extends GenericService(classOf[Label]) {

  def update(label: Label): Unit = {
    update(label);
  }
}