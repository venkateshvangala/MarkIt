package controllers.login

import play.api._
import play.api.mvc._
import views.html._
import play.api.data._
import play.api.data.Forms._
import play.api.Logger
import models.services.UserService
import controllers.Application
import views.html._


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
        Logger.info("Login Index Method")
        Ok(login(loginForm))
  }
  
  def authenticate = Action { implicit request => 
    val result = loginForm.bindFromRequest.fold(
      formWithErrors => { BadRequest(login(formWithErrors)) },
      success => { Logger.info("Success") }
    )
    Ok(main.render());
  }
  
}