pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t xz-test:1.0 .'
      }
    }
  }
}