package security

import org.jasypt.util.password.StrongPasswordEncryptor

/**
 * @author venkateshv
 */

object PasswordEncryptor {
    lazy val passwordEncryptor = new StrongPasswordEncryptor;
    def checkPassword(message: String, digest: String) = passwordEncryptor.checkPassword(message, digest);
    def encryptPassword(password: String) = passwordEncryptor.encryptPassword(password);
}