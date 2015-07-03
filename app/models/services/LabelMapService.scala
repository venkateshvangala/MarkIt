package models.services

import play.api.Logger
import models.data.LabelMap
import com.avaje.ebean.Ebean
import org.apache.shiro.authc.UsernamePasswordToken
import org.apache.shiro.SecurityUtils
import javax.security.sasl.AuthenticationException

/**
 * @author venkateshv
 */

object LabelMapService extends GenericService(classOf[LabelMap]) {
}