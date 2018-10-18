#어떤 이미지로부터 새로운 이미지를 생성할지를 지정
FROM node:latest

#Dockerfile 을 생성/관리하는 사람
MAINTAINER soojin <soojin@datastreams.com>

# /app 디렉토리 생성
RUN mkdir -p /docker-express
# /app 디렉토리를 WORKDIR 로 설정
WORKDIR /docker-express
# 현재 Dockerfile 있는 경로의 모든 파일을 /app 에 복사
ADD . /docker-express
# npm install 을 실행
RUN npm install

#환경변수 NODE_ENV 의 값을 development 로 설정
ENV NODE_ENV development

#가상 머신에 오픈할 포트
EXPOSE 3000 80

#컨테이너에서 실행될 명령을 지정
CMD ["npm", "start"]