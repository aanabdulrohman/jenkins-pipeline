pipeline {
  agent any

  stages {
    stage ("Hello") {
      steps {
        echo "Hello Jenkins"
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
