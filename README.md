# Projects Guide

## Step 1. Create React Application


1. npx create-react-app myApp 
OR
2. [* Support Typescript]
npx create-react-app myApp --template typescript 

3. cd myApp

4. npm start


## Step 2. Delete some files useless

## Step 3. Configure Absolute Import


1. Create tsconfig.json in Project directory
   
2. Add :
{
    "baseUrl": "src",
    ...
}

## Step 4. Install SCSS feature

1. npm install node-sass sass-loader --save
OR
2. yarn add node-sass sass-loader


## Step 5. Install Tailwind

1. Offical URL : https://tailwindcss.com/docs/installation/using-postcss

2. npm install -D tailwindcss postcss autoprefixer

3. npx tailwindcss init -p

4. In tailwind.config.js, add:
    content: ["./src/**/*.{js,jsx,ts,tsx}"],

5. In app.css, add:
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

6. Testing
    <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>


## Step 6. Add google fonts and application Styles

# project tree
```
my-react-project          
├─ public                 
│  ├─ favicon.ico         
│  ├─ index.html          
│  ├─ logo192.png         
│  ├─ logo512.png         
│  ├─ manifest.json       
│  └─ robots.txt          
├─ src                    
│  ├─ App.css             
│  ├─ App.tsx             
│  ├─ index.tsx           
│  └─ react-app-env.d.ts  
├─ README.md              
├─ package-lock.json      
├─ package.json           
├─ postcss.config.js      
├─ tailwind.config.js     
└─ tsconfig.json          
```
