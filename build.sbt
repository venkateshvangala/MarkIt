name := "MarkIt"

version := "1.0-SNAPSHOT"

libraryDependencies ++= Seq(
  jdbc,
  javaEbean,
  "mysql" % "mysql-connector-java" % "5.1.35",
  "org.jasypt" % "jasypt" % "1.9.2",  
  "org.apache.shiro" % "shiro-core" % "1.2.3"
)     

play.Project.playScalaSettings
