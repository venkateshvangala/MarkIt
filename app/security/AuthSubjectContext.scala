package security

import org.apache.shiro.subject.support.DefaultSubjectContext
import org.apache.shiro.subject.SubjectContext

/**
 * @author venkateshv
 */

class AuthSubjectContext(context: SubjectContext = null) extends DefaultSubjectContext(context){
    override def getSession = null;
    override def isSessionCreationEnabled = false; 
}