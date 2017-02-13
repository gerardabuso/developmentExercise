Why you chose the language and or libraries, why you structured the project the way that you did, why you chose a particular error handling strategy etc. 
A list of assumptions that you’ve made while putting the system together. We’ve only given you a very loose spec, so you’ll probably need to fill in some blanks while you are working. If you note down the assumptions, for us, then we will be able review the code within the context of those assumptions.

UI:
- Used Angular 1.6.0 since this is the latest and Angular version produced by Yeoman.
- Used Yeoman for the scaffolding/folder structure.
- Used bootstrap css and font-awesome for some icons
- Used ui-router for routing and seperated each file for controller, service, factory etc.
- Assumptions:
1. The user wants to see which files are uploaded before submitting. I added visibility for uploaded files.
2. The user has the option to remove any of the uploaded files. I added remove option.
3. On successful submit, the selection of Pet and uploaded files must be cleared for a new transaction.


Backend:
- Used C# .NET Web API and Visual Studio for the IDE since I am most familiar with this and this is simple to create.
- Used SelfHost, CORS to enable cross-origin (running the backend in loclhost)
