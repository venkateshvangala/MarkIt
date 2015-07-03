package controllers.taskManager


import play.api._
import play.api.mvc._
import play.api.mvc.RequestHeader
import views.html._
import play.api.data._
import play.api.data.Forms._
import play.api.libs.json.JsObject
import play.api.libs.json.JsString
import models.services._
import models.data._
import play.api.libs.json.JsArray
import play.api.libs.json.Json
import play.api.libs.json.JsValue
 





/**
 * @author venkateshv
 */
object TaskController extends Controller{
  
  def addTask = Action{ request =>
      val requestBody = request.body.asJson;
      val task = new Task();
      task.title_=(requestBody.get.\("title")+"");
      task.description_=(requestBody.get.\("description")+"")
      TaskService.save(task);
      Ok(JsObject(List( "success"->JsString("success"), "error"->JsString("false"))));
  }
  
 
  
  
  
  def listTask = Action{ 
      val taskList: List[Task] = TaskService.all();

      
      
       var test = "";
      
      for (task <- taskList){
          val json = Json.obj(
          "title" -> task.title,
          "descrition" -> task._description,
          "taskId" -> task.taskId.toString()
        );
        test += json + "|";
      }
      
      Ok(test);
    
      
  }
  
}