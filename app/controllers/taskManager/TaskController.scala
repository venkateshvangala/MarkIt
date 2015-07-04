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
      var task = new Task();
      task.title_=(requestBody.get.\("title").toString());
      task.description_=(requestBody.get.\("description").toString());
         
      var id:Int = requestBody.get.\("taskId").toString().replaceAll("\"" , "").toInt; 
      
      if(id != 0){
         task = TaskService.findById(id);
         task.title_=(requestBody.get.\("title").toString());
         task.description_=(requestBody.get.\("description").toString());
         var status:Int = requestBody.get.\("status").toString().replaceAll("\"" , "").toInt; 
         task.status_=(status);
         TaskService.update(task);
      }
      else{
          TaskService.save(task);
      }
      Ok(JsObject(List( "success"->JsString("success"), "error"->JsString("false"))));
  }

  def listTask = Action { 
      val taskList: List[Task] = TaskService.all();
      var tasks = "";
      for (task <- taskList){
        if(task.status == 0){
            val json = Json.obj(
            "title" -> task.title,
            "descrition" -> task._description,
            "taskId" -> task.taskId.toString()
          );
          tasks += json + "|";
        }
      }
      Ok(tasks);
  }
  
  def archiveTaskList = Action { 
      val taskList: List[Task] = TaskService.all();
      var tasks = "";
      for (task <- taskList){
        if(task.status == 1){
            val json = Json.obj(
            "title" -> task.title,
            "descrition" -> task._description,
            "taskId" -> task.taskId.toString()
          );
          tasks += json + "|";
        }
      }
      Ok(tasks);
  }
  
  def deltedTaskList = Action { 
      val taskList: List[Task] = TaskService.all();
      var tasks = "";
      for (task <- taskList){
        if(task.status == 2){
            val json = Json.obj(
            "title" -> task.title,
            "descrition" -> task._description,
            "taskId" -> task.taskId.toString()
          );
          tasks += json + "|";
        }
      }
      Ok(tasks);
  }
  
}