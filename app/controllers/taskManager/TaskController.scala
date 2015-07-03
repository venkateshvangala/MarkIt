package controllers.taskManager


import play.api._
import play.api.mvc._
import play.api.mvc.RequestHeader
import views.html._
import play.api.data._
import play.api.data.Forms._
import play.api.libs.json.JsObject
import play.api.libs.json.JsString
import play.libs.Json
import models.data.Task


/**
 * @author venkateshv
 */
object TaskController extends Controller{
  
  def addTask = Action{ request =>
      val requestBody = request.body.asJson;
      val task = new Task();
//      task._taskId_=();
      
      
      Ok(JsObject(List( "one"->JsString("venkis"), "two"->JsString("test"))));
  }
}