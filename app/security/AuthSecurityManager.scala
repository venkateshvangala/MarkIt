package security

import org.apache.shiro.mgt.DefaultSecurityManager
import org.apache.shiro.subject.SubjectContext


/**
 * @author venkateshv
 */

class AuthSecurityManager extends DefaultSecurityManager{
  
    setSubjectFactory(new AuthSubjectFactory);
    
    override protected def createSubjectContext = new AuthSubjectContext;
    
    override protected def copy(subjectContext: SubjectContext) : SubjectContext = {
        if(subjectContext.isInstanceOf[AuthSubjectContext]){
            return new AuthSubjectContext(subjectContext);  
        }
        super.copy(subjectContext);
    }
}