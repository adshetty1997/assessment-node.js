** All constants specified in main file for now.
** Entry of duplicate files restricted using mongodb index

Steps to run project in local system:
- In the file directory, run command "npm i" in terminal. This will install all dependencies.
- Then, run "npm start". This will run the project on your local system.

Deployment details:
- I have started a single instance on AWS
- Cloned the git repo on that instance, and run the project in a similar way as in local systems.


-----------------------------------------------------------------------------------------------------------
API Endpoints
-----------------------------------------------------------------------------------------------------------
{
    Method = POST
    End Point = <server-ip>/ 
    Body = {title:"", author:"", summary:""} 
    Response = "acknowledgment message"
}
-----------------------------------------------------------------------------------------------------------
{
    Method = GET 
    End Point = <server-ip>/:id? (parameter "id" optional)
    Response = [...]array of book if no id specified, else [{}]array with specific book
}
-----------------------------------------------------------------------------------------------------------
{
    Method = PUT
    End Point = <server-ip>/:id
    Body = {title?:"", author?:"", summary?:""} (atleast one key to change in body)
    Response = "acknowledgement message"
}
-----------------------------------------------------------------------------------------------------------
{
    Method = DELETE
    End Point = <server-ip>/:id
    Response = "acknowledgement message"
}
-----------------------------------------------------------------------------------------------------------