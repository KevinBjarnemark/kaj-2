# Kaj 2

## Table of Contents
- 💡 [Introduction](#introduction)
- 🏃‍♂️ [Run the App](#run-the-app)
- ⛔️ [Known Issues](#known-issues)

### Uppdrag  
- 👤 **Stoffe**  
    - ❌ Contact page   
        - ❌ Contact form (`name`, `email`, `message`)   
            - ✨ (`backend`) Save in **MySql** database    
        - ❌ Link in navbar    
- ❌ Header
    - ❌ 👤 **Kevin** Convert header, layout, about page to typescript 
- ❌ Navbar 
    - ❌ 👤 **Anton** Logo to the left   
    - ❌ Login button    
        - ✨ Authentication with JWT    
        - ❌ Must have unique style  
    - ❌ The active page must be highlighted    
    - ❌ Remove list bullet points with CSS   
    - ❌ All items must be centered  
    - ❌ Padding (left and right)  
    - ❌ Must be horizontal  
    - ❌ Hover effect on links    
- ❌ Footer 
    - ❕ Must be reusable    
    ❌ Copyright text  
- ❌ 👤 **Kevin** At least one **image** present on any of the pages
    - 💡 Consistent background image?   
- ❌ TailWind CSS  
    - ❌ 👤 **Kevin**  Convert all CSS to tailwind
- ❌ API anrop till backend?  
- ❌ Planera Agilt workflow?  
- ❌ Netlify hosting?  
- ✨ Dropdown selection för alla funktioner   



## Introduction     
_________________________

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

## Known Issues  
- __________ 
