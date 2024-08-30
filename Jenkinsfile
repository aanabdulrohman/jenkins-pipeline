@Library("jenkins-shared-library@master") _

import osi.jenkins.Output;

pipeline {
  agent any
  stages {

    stage ("Hello Groovy") {
      steps {
        script {
          Output.hello("Groovy!")
        }
      }
    }

    stage ("Hello world") {
      steps {
        script {
          hello.world ()
        }
      }
    }
  }
}