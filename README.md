# PsychBFF
</br>

## Table of contents 


* [Introduction](#introduction) 
  * [What the application does](#usage)
* [Technologies used](#tech)
* [Steps to set up the application environment and run the application](#setup)

## Introduction <a name='introduction'></a>
### What the application does <a name='usage'></a>
---------
This application can be used by patients being seen for psychological disorders as well as psychologists assisting these patients. They are able to do the following:
1. Log in to their account to see the disorders linked to their account.
2. Add daily intensity logs.
3. See whether their monthly avarage intensity is above 8. If it is then they are recommend to go and see their psychologist and receive further assistance. 

</br>

## Technologies used <a name='tech'></a>

1. Markdown: used to create this README documentation. 
2. JWT tokens: used to log user in and link their disorders to their account.
3. MongoDB: used to save all information attached to the user and their disorders.
4. React: used for the front end development.
5. Node.js: mostly used for command line tools.

</br>

## Steps for setting up the application environment and running the application <a name='setup'></a>
</br>
For this explanation we will be setting up the environment on Visual Studio Code so ensure that this is first downloaded and installed before following the next steps. </br>

If you do not have Visual Studio Code downloaded on your personal computer [You can download it here](https://code.visualstudio.com/download)
1. Open and log into GitHub on your web browser.
2. Enter "My-improved-App" into the search bar on GitHub. 
3. Click the green button called code as seen in the image below.</br>
![Green code button](https://user-images.githubusercontent.com/86288374/186472845-57560d77-1acc-41c4-a401-709ba33757ea.PNG)
4. You will now get a list of options. Choose Download zip.
5. Extraxt the files from the downloaded zip folder.
6. Open Visual Studio Code.
7. Click on file in the navigation bar. An image is provided to show you where to find this option. 
![File in navigation bar](https://user-images.githubusercontent.com/86288374/186472570-ac4fc259-05c4-4529-b8cc-3bf8a077bed0.PNG)
8. You will now be presented with a dropdown list of options. Choose open folder.Choose the extracted folder and click select folder.
9. You will now be presented with the files that are contained in the project repository.
10. First run "npm install --prefix client" in the terminal to download libraries that allow the application to run.
11. Then run "npm run dev" in the terminal and this should allow you to run the backend and frontend concurrently. 
12. You should now see the login page on your browser. 


