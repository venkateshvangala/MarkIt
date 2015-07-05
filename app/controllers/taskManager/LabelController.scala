package controllers.taskManager


import play.api._
import play.api.mvc._
import views.html._
import play.api.data._
import play.api.data.Forms._
import play.api.libs.json.{JsObject, JsString}
import models.services._
import models.data._

import play.api.mvc.Controller

object LabelController extends Controller{
  
    def assignToLabel = Action{ request =>
      val requestBody = request.body.asJson;
      
      var labelMap = new LabelMap;
      labelMap.taskId_=(requestBody.get.\("taskId").toString().toInt);
      labelMap.labelId_=(requestBody.get.\("labelId").toString().toInt);
      var id:Int = requestBody.get.\("mapId").toString().replaceAll("\"" , "").toInt; 
      
      if(id != 0){
         labelMap = LabelMapService.findById(id);
         labelMap.taskId_=(requestBody.get.\("taskId").toString().toInt);
         labelMap.labelId_=(requestBody.get.\("labelId").toString().toInt);
         LabelMapService.update(labelMap);
      }
      else{
          LabelMapService.save(labelMap);
      }
      
      Ok(JsObject(List( "success"->JsString("success"), "error"->JsString("false"))));
  }
}