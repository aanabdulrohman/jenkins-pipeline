pipeline {
  agent any

  stages {
    
    stage ("Build") {
      steps {
        echo "Hello Build"
      }
    }

    stage ("Test") {
    steps {
        echo "Hello Test"
      }
    }

    stage ("Build") {
    steps {
        echo "Hello Build"
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
