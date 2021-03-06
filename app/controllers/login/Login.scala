package controllers.login

import play.api._
import play.api.mvc._
import views.html._
import play.api.data._
import play.api.data.Forms._
import play.api.Logger
import models.services.UserService
import controllers.Application

/**
 * @author venkateshv
 */

object Login extends Controller {

  val loginForm = Form(
      tuple(
          "email" -> email,
          "password" -> text
      ) verifying("Invalid email or password", result => result match {
        case (email, password) => UserService.authenticate(email, password);  
      })
  );
  
  def index = Action { implicit request =>
        Ok(login(loginForm))
  }
  
  def logout = Action { implicit request =>
      UserService.logout();
      Ok(login(loginForm))
    }
  
  def authenticate = Action { implicit request => 
    var emailId: String = "";
    val result = loginForm.bindFromRequest.fold(
      formWithErrors => { BadRequest(login(formWithErrors)) },
      success => {
        emailId = success._1;
        Logger.info("Logged In User..." + success._1)
      })
    Ok(main.render()).withSession("email" -> emailId);
  }
  
}