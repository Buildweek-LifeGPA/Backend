# [Backend](https://github.com/pintereach-bw/Backend)
Hello! This is the back-end documentation for the [LifeGPA](https://github.com/Buildweek-LifeGPA) project. This is the link to our [Figma design](https://www.figma.com/file/K5NaKl98e0gOLYEOVpOprmKE/V01?node-id=0%3A1) of what our application accomplishes.

# Authentication  

What is the preferred way of using the API? The API supplies a token upon logging in and is required to perform any CRUD actions.

# Endpoints  

## Registration
POST https://lifegpa-201910.herokuapp.com/api/users/register

```
Get 201 Status Back  

{  

    "id": "1",  

    "username": "hello",  

    "password": "world"  

}
```

## Login
POST https://lifegpa-201910.herokuapp.com/api/users/login

```
Get 200 Status Back  

{  

    "id": "1",  

    "username": "hello",  

    "password": "world"  

}
```

## Get A List Of All Habits
GET https://lifegpa-201910.herokuapp.com/api/habits

```
Get 200 Status Back  

{  

    "id": "1",  

    "username": "hello",  

    "password": "world"  

}
```

## Create A New Habits
POST https://lifegpa-201910.herokuapp.com/api/habits

```
Get 201 Status Back  

{
  "id": 4,  

  "habit_text": "Walk the dog more",  

  "user_id": 1  

}
```

## Delete A Habit
DELETE https://lifegpa-201910.herokuapp.com/api/habits/:id
