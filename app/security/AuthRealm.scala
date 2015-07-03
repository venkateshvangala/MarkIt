package security

import org.apache.shiro.realm.AuthorizingRealm
import org.apache.shiro.authc.{AuthenticationException, AuthenticationInfo, AuthenticationToken, SimpleAuthenticationInfo, UsernamePasswordToken}
import models.services.UserService
import scala.collection.JavaConversions._
import org.apache.shiro.subject.PrincipalCollection
import org.apache.shiro.authz.{SimpleAuthorizationInfo, AuthorizationInfo}
import org.apache.shiro.authc.credential.CredentialsMatcher

/**
 * @author venkateshv
 */

class AuthRealm extends AuthorizingRealm { 
    
    override protected def doGetAuthenticationInfo(token: AuthenticationToken): AuthenticationInfo = {
        val userToken = token.asInstanceOf[UsernamePasswordToken];
        
        val userName = userToken.getUsername
        checkNotNull(userName, "Null usernames are not allowed by realm.");
        
        val password = getPassword(userName);
        checkNotNull(password, "No accound found for the user " + userName);
        
        new SimpleAuthenticationInfo(userName, password, getName);
    }
    
    def doGetAuthorizationInfo(principals: PrincipalCollection): AuthorizationInfo = {
        val userName = principals.getPrimaryPrincipal().asInstanceOf[String];
        val info = new SimpleAuthorizationInfo(getRole(userName));
        info.setStringPermissions(getPermission(userName));
        info;
    }
    
/*    override def getCredentialsMatcher = new CredentialsMatcher(){
        def doCredentialsMatch(token: AuthenticationToken, info: AuthenticationInfo) = {
          val message = new String(token.getCredentials.asInstanceOf[Array[Char]]);
          val digest  = info.getCredentials.toString;
          val result  = PasswordEncryptor.checkPassword(message, digest);
          result;
        }
    }*/
    
    private def getPermission(userName: String): Set[String] = Set();
    
    private def getRole(email: String): Set[String] = {
      val role = UserService.findByEmail(email).role;
      role.toLowerCase() match {
        case "admin"   => Set("admin")
        case "finance" => Set("finance")
        case "user" => Set("user")
        case _ => Set.empty
      }
    }
    
    private def getPassword(userName: String): String = {
        UserService.findByEmail(userName) match {
          case user => user.password
          case none => null
        }
    }
  
    private def checkNotNull(refernce: String, message: String): Unit = {
      if(refernce == null){
         throw new AuthenticationException(message);
      }
    }
}