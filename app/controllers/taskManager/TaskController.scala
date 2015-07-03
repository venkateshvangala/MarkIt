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
import java.util.Date
import java.sql.Timestamp
import models.services.TaskService


/**
 * @author venkateshv
 */
object TaskController extends Controller{
  
  def addTask = Action{ request =>
      val requestBody = request.body.asJson;
      val task = new Task();
      task.title_=(requestBody.get.\("title")+"");
      task.description_=(requestBody.get.\("description")+"")
//      task.createDate_=(new Timestamp(new Date().getTime));
      task.startDate_=(new Timestamp(new Date(requestBody.get.\("startDate")+"").getTime));
      task.endDate_= (new Timestamp(new Date(requestBody.get.\("endDate")+"").getTime))
      TaskService.save(task);
      
//      Ok(JsObject(List( "one"->JsString("venkis"), "two"->JsString("test"))));
      
      Ok("success");
  }
}