pipeline {
  agent any

  stages {
    
    stage("Build") {
      steps {
        echo("Hello Build")
        sleep(5)
      }
    }

    stage("Test") {
      steps {
        echo("Hello Test")
        sleep(6)
      }
    }

    stage("Deploy") {
      steps {
        echo("Hello Deploy")
        sleep(7)
      }
    }

  }
  post {
    always {
      echo "Hallo guys"
    }
    success {
      echo "Yeay success gusy"
    }
    failure {
      echo "Oh no, failure"
    }
    cleanup {
      echo "Don't care success or error"
    }
  }
}
