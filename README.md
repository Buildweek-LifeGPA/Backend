# [Backend](https://github.com/pintereach-bw/Backend)
Hello! This is the back-end documentation for the [LifeGPA](https://github.com/Buildweek-LifeGPA) project. This is the link to our [Figma design](https://www.figma.com/file/K5NaKl98e0gOLYEOVpOprmKE/V01?node-id=0%3A1) of what our application accomplishes.

# Authentication  

What is the preferred way of using the API? The API supplies a token upon logging in and is required to perform any CRUD actions.

# Endpoints  

## Registration
POST localhost:5000/api/users/register <------ Will be replaced by Heroku url

```
Get 201 Status Back  

{  

    "id": "1",  

    "username": "hello",  

    "password": "world"  

}
```

## Login
POST localhost:5000/api/users/login <------ Will be replaced by Heroku url

```
Get 200 Status Back  

{  

    "id": "1",  

    "username": "hello",  

    "password": "world"  

}
```