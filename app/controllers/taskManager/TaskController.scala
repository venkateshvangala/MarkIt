package controllers.taskManager

import play.api._
import play.api.mvc._
import views.html._
import play.api.data._
import play.api.data.Forms._
import play.api.libs.json.{JsObject, JsString}
import models.services._
import models.data._
import play.api.libs.json.{JsArray, Json, JsValue}

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
         task.status_=(requestBody.get.\("status").toString().replaceAll("\"" , "").toInt);
         TaskService.update(task);
         
         var labelMap = LabelMapService.findByTaskId(id);
         if(labelMap == null){
           labelMap = new LabelMap;
           labelMap.labelId_=(requestBody.get.\("labelId").toString().replaceAll("\"" , "").toInt) 
           labelMap.taskId_=(requestBody.get.\("taskId").toString().replaceAll("\"" , "").toInt);
           labelMap.userId_=(1);
           LabelMapService.save(labelMap);
         }
         else{
           labelMap.labelId_=(requestBody.get.\("labelId").toString().replaceAll("\"" , "").toInt) 
           labelMap.taskId_=(requestBody.get.\("taskId").toString().replaceAll("\"" , "").toInt);
           labelMap.userId_=(1);
           LabelMapService.update(labelMap);
         }
      }
      else{
          TaskService.save(task);
      }
      Ok(JsObject(List( "success"->JsString("success"), "error"->JsString("false"))));
  }

  
  def filteredTasks(status: Int): String = {
    val taskList: List[Task] = TaskService.all();
    var tasks = "";
    for (task <- taskList){
      if(task.status == status){
          val json = Json.obj(
            "title" -> task.title,
            "descrition" -> task._description,
            "taskId" -> task.taskId.toString()
          );
          tasks += json + "|";
      }
    }
    tasks;
  }
  
  def listTask = Action { 
      Ok(this.filteredTasks(0));
  }
  
  def archiveTaskList = Action { 
      Ok(this.filteredTasks(1));
  }
  
  def deltedTaskList = Action { 
      Ok(this.filteredTasks(2));
  }
  
  def isLabelExist(id2 : Int, labelId: Int): Boolean ={
    var isExist = false;
    var labelSize = LabelMapService.all().size
     for (labelMap <- LabelMapService.all()){
       if(labelMap.taskId == id2 && labelMap.labelId == labelId) {
         isExist = true;
       }
     }
    isExist;
  }
  
  def labelTaskList(labelId:String) = Action { 
      val taskList: List[Task] = TaskService.all();
      var tasks = "";
      for (task <- taskList){
        if(this.isLabelExist(task.taskId.toInt, labelId.toInt)){
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