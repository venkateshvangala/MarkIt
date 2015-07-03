package controllers

import play.api.mvc.Controller
import play.api.mvc._
import views._
import play.api.Logger
import views.html._
import models.services._
import models.data._

object Application extends Controller{
    def index = Action { implicit request =>
      Ok("");
    }
}

