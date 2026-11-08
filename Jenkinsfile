
pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'nerender/wms-customer-ui'
        DOCKER_CREDENTIALS = 'dockerhub-credentials'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Generate Image Tag') {
            steps {
                script {
                    env.IMAGE_TAG = sh(
                        script: 'git rev-parse --short=7 HEAD',
                        returnStdout: true
                    ).trim()

                    env.FULL_IMAGE =
                        "${DOCKER_IMAGE}:${IMAGE_TAG}"

                    echo "Building image: ${FULL_IMAGE}"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker buildx build \
                      --load \
                      --tag "${FULL_IMAGE}" \
                      .
                '''
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: "${DOCKER_CREDENTIALS}",
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {
                    sh '''
                        echo "$DOCKER_PASSWORD" | \
                          docker login \
                          --username "$DOCKER_USERNAME" \
                          --password-stdin

                        docker push "${FULL_IMAGE}"

                        docker logout
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "Customer UI Docker image pushed successfully."
            echo "Image: ${env.FULL_IMAGE}"
        }

        failure {
            echo "Customer UI Jenkins pipeline failed."
        }
    }
}
