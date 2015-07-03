package models.services

import com.avaje.ebean.Ebean
import scala.collection.JavaConverters._

/**
 * @author venkateshv
 */

class GenericService[T](beanClass: Class[T]) {

  val finder = Ebean.find(beanClass);

  def all(): List[T] = {
    finder.findList().asScala.toList;
  }

  def findById(id: Any): T = {
    Ebean.find(beanClass, id);
  }

  def save(): Unit = {
    Ebean.save(beanClass);
  }

  def update(): Unit = {
    Ebean.update(beanClass);
  }

  def delete(): Unit = {
    Ebean.delete(beanClass);
  }
}