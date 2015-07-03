package controllers.taskManager


import play.api._
import play.api.mvc._
import play.api.mvc.RequestHeader
import views.html._
import play.api.data._
import play.api.data.Forms._
import play.api.libs.json.JsObject
import play.api.libs.json.JsString
import play.api.libs.json.Json
import models.data.Task
import models.services.TaskService
import play.api.libs.json.JsValue
import play.api.libs.json.{JsNull,Json,JsString,JsValue}
import play.api.libs.json.Writes
import play.api.libs.json.JsPath
import play.api.libs.json.JsArray





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
  
 
  
  
  
  def listTask() = Action{
      val taskList: List[Task] = TaskService.all();
//      val arra = new JSONArray(taskList);

      
      var newArray = new JsArray
      
       
      
      for (task <- taskList){
          val json = Json.obj(
          "name" -> task.title,
          "location" -> task._description,
          "residents" -> task.taskId
        );
        newArray.+:(json)
      }
//      
      var json1: JsValue = Json.obj(
      "residents" -> newArray
    )
      
      
//      val json: JsValue = Json.obj(
//      "residents" -> Json.arr(
//        Json.obj(
//          "name" -> "Fiver",
//          "age" -> 4,
//          "role" -> JsNull
//        ),
//        Json.obj(
//          "name" -> "Bigwig",
//          "age" -> 6,
//          "role" -> "Owsla"
//        )
//      )
//    )
//      
      
//      Ok(JsObject(List( "success"->JsString("success"), "error"->JsString("false"))));
        Ok(json1);
      
  }
  
}