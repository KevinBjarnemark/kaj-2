
# Kaj 2

## Table of Contents
- 🖥️ [Deployed app](#deployed-app)
- 🏃‍♂️ [Run the App](#run-the-app)
- 🚀 [Deploy the app](#deploy-the-app)

## Deployed app  
- 🖥️ Visit the app at [Project KAJ](https://project-kaj.netlify.app/)


## Run the App

### Backend

#### 1. 🔧 Configure environment variables
1. 📄 Create a file called `.env` in 📁 `/backend`
    - ❕ View example file [.env.example](backend/.env.example)  
2. Add your **password**, **username**, etc., 
3. Do exactly the same but for the frontend

> ⚠️ These files are personal and will **not** be pushed to GitHub!

#### 2. 📦 Create docker containers  
1. Ensure you're in the 📁 `/backend` folder (terminal) 
    - `cd backend`   
2. Run `docker compose up` (in WSL)   
    - **Note**: older setups may use `docker-compose up`   

#### 3. 🏃 Run application
1. Ensure you're in the 📁 `/backend` folder (**in both CMD and WSL**) 
    - `cd backend`  
2. Start docker
    - Run `docker compose up` (in WSL)   
        - **Note**: older setups may use `docker-compose up`   
3. Run `mvnw spring-boot:run` (in CMD)
4. Go to  [http://localhost:8080/welcome/yourname](http://localhost:8080/welcome/yourname)
5. Web browser should display: `Welcome <yourname>! 😃`

#### 4. 🛢️ (Optional) Run MySql directly
1. Run `docker compose exec db bash` (from the backend folder)
2. Run `mysql -uroot -p`
3. Type in your password (see .env file)
4. Run any SQL command directly

### Frontend

#### 1. 📁 Enter the frontend folder (terminal)
- `cd frontend` 

#### 2. 📦 Install npm libraries (terminal)
- `npm install` 
    - ❕ You only have to do this once   

#### 3. 🏃 Run application (terminal)
- `npm run dev`
    - Go to [http://localhost:3000/](http://localhost:3000/) 

## Deploy the app  
- ❕ Replace `1.0.0` with the actual version  
- 🖥️ `git tag frontend/v1.0.0`  
    - ❕ Create a git tag locally  
- 🖥️ `git push origin frontend/v1.0.0`  
    - ❕ Push the tag to remote repo    
- ❕ This triggers a workflow using GitHub Actions  

## Credits  
- [Hero image](https://pixabay.com/photos/space-astronomy-galaxy-universe-9250868/)    
- [Home icon](https://fontawesome.com/icons/house?f=classic&s=solid)
