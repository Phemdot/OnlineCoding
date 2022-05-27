#Base image taken 
FROM node:8
#Create the folder where our project will be store
RUN mkdir /onlinecodingcha
#Make it work directory
WORKDIR /onlinecodingcha
#Install the dependencies in the work directory
RUN npm Install
#Executable commands the container will use[Exec Form]
ENTRYPOINT [ "npm", "run", "test" ]
#Run the executable
CMD [ "executable" ]