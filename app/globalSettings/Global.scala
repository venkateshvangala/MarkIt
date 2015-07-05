package globalSettings

import play.api._
import play.api.mvc._
import play.api.mvc.Results._
import scala.concurrent.Future
import security.{AuthRealm, AuthSecurityManager}
import org.apache.shiro.mgt.{DefaultSubjectDAO, DefaultSessionStorageEvaluator}

/**
 * @author venkateshv
 */

object Global extends GlobalSettings{
  
    override def onStart(app: Application) = {
      Logger.info("Starting the application");
      ShiroConfig.initialize();
    }
    
    override def onStop(app: Application) = {
      Logger.info("Stopping the application");  
    }
    
    override def onBadRequest(request : RequestHeader, error: String) = {
       Future.successful(BadRequest("Bad Request: " + error))
    }
}

object ShiroConfig{
    def initialize() {
        val authRealm = new AuthRealm;
        val securityManager = new AuthSecurityManager;
        securityManager.setRealm(authRealm);
        val subjectDao = securityManager.getSubjectDAO.asInstanceOf[DefaultSubjectDAO];
        val sessionStorageEvaluator = subjectDao.getSessionStorageEvaluator.asInstanceOf[DefaultSessionStorageEvaluator];
        sessionStorageEvaluator.setSessionStorageEnabled(false);
        org.apache.shiro.SecurityUtils.setSecurityManager(securityManager);
    }
}