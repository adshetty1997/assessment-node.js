** All constants specified in main file for now.
** Entry of duplicate files restricted using mongodb index

Steps to run project in local system:
- In the file directory, run command "npm i" in terminal. This will install all dependencies.
- Then, run "npm start". This will run the project on your local system.

Deployment details:
- I have started a single instance on AWS
- Cloned the git repo on that instance, and run the project in a similar way as in local systems.
- IP : http://16.171.176.127:3000

Demo video link: https://www.loom.com/share/e9b9e2e1d974427fb4dab12c5668f656?sid=b8bc954b-f4e1-42d0-a4bf-5aae6f9b1039


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