FROM node:8.12.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
##################### to build the app ##############################
#RUN npm run build
#FROM nginx 
#COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
#COPY --from=builder /app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

# npm run dev
CMD [ "npm", "run", "dev" ]
EXPOSE 3000