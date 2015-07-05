package models.services

import play.api.Logger
import models.data.LabelMap
import com.avaje.ebean.Ebean
import org.apache.shiro.authc.UsernamePasswordToken
import org.apache.shiro.SecurityUtils
import javax.security.sasl.AuthenticationException
import models.data.LabelMap
import scala.collection.JavaConverters._


/**
 * @author venkateshv
 */

object LabelMapService extends GenericService(classOf[LabelMap]) {
  def update(task: LabelMap): Unit = {
    Ebean.update(task);
  }
  
  def findByTaskId(taskId: Int): LabelMap = {
    finder.where().eq("task_id", taskId).findUnique();
  }
  
}