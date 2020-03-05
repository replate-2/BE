# BE Endpoints

**Base URL: https://bw-replate2.herokuapp.com/**

**Register New Business**
POST to /api/auth/business/register

Takes an object including:
```
{
    username: 'Business1', // Unique string
    password: 'password', // string
    businessName: 'Business1', // string
    businessAddress: '123 N. Street', // string
    businessPhone: '1234567890' // string
}
```
**Login Existing Business**
POST to /api/auth/business/login

Takes an object including:
```
{
    username: 'Business1',
    password: 'password'
}
```
**Register New Volunteer**
POST to /api/auth/volunteer/register

Takes an object including:
```
{
    username: 'Volunteer1', // Unique string
    password: 'password', // string
    name: 'My Name', // string
    phoneNumber: '1234567890' // string
}
```
**Login Existing Volunteer**
POST to /api/auth/volunteer/login

Takes an object including:
```
{
    username: 'Volunteer1',
    password: 'password'
}
```
# THE FOLLOWING ENDPOINTS REQUIRE A USER TO BE LOGGED IN!

**Get all Registered Business Profiles**
GET to /api/users/business

Returns an array with business objects:
```
[
    {
        id: 1,
        username: "Business1",
        password: "password",
        businessName: "Business1",
        businessAddress: "123 N. Street",
        businessPhone: "1234567890"
    },
    {
        id": 2,
        username: "Business2",
        password: "password",
        businessName: "Business2",
        businessAddress: "456 S. Street",
        businessPhone: "1234567890"
    },
    {
        id": 3,
        username: "Business3",
        password: "password",
        businessName: "Business3",
        businessAddress: "1234 W. Street",
        businessPhone: "1234567890"
    }
]
```
**Get Business Profile by Id**
GET to /api/users/business/:id

Returns an object including:
```
{
    id: 1,
    username: "Business1",
    password: "password",
    businessName: "Business1",
    businessAddress: "123 N. Street",
    businessPhone: "1234567890"
}
```
**Update Business Profile**
PUT to /api/users/business/:id

**Delete Business Profile**
DELETE to /api/users/business/:id

**Get all Registered Volunteer Profiles**
GET to /api/users/volunteer

Returns an array with volunteer objects:
```
[
    {
        id: 1,
        username: "Volunteer1",
        password: "password",
        name: "Volunteer1",
        phoneNumber: "1234567890"
    },
    {
        id: 2,
        username: "Volunteer2",
        password: "password",
        name: "Volunteer2",
        phoneNumber: "7894561230"
    },
    {
        id: 3,
        username: "Volunteer3",
        password: "password",
        name: "Volunteer3",
        phoneNumber: "7891234560"
    }
]
```

**Get Volunteer Profile by Id**
GET to /api/users/volunteer/:id

Returns an object:
```
{
    id: 1,
    username: "Volunteer1",
    password: "password",
    name: "Volunteer1",
    phoneNumber: "1234567890"
}
```

**Update Volunteer Profile**
PUT to /api/users/volunteer/:id

**Delete Volunteer Profile**
DELETE to /api/users/volunteer/:id

**Get list of all food donations**
GET /api/food

Returns an array of all food donation objects:
```
[
    {
        id: 1,
        foodType: "donuts",
        lbsOfFood: 1,
        preferredPickupTime: "2020-03-07 17:30:00",
        businessId: 1,
        businessName: "Business1",
        businessAddress: "123 N. Street",
        businessPhone: "1234567890"
    },
    {
        id: 2,
        foodType: "vegetables",
        lbsOfFood: 10,
        preferredPickupTime: "2020-03-07 17:30:00",
        businessId: 2,
        businessName: "Business2",
        businessAddress: "456 S. Street",
        businessPhone: "1234567890"
    },
    {
        id: 3,
        foodType: "meat",
        lbsOfFood: 5,
        preferredPickupTime: "2020-03-07 17:30:00",
        businessId: 3,
        businessName: "Business3",
        businessAddress: "1234 W. Street",
        businessPhone: "1234567890"
    }
]
```

**Get food donation by Id**
GET /api/food/:id

Returns an object with the following:
```
{
    id: 1,
    foodType: "donuts",
    lbsOfFood: 1,
    preferredPickupTime: "2020-03-07 17:30:00",
    businessId: 1,
    businessName: "Business1",
    businessAddress: "123 N. Street",
    businessPhone: '1234567890'
}
```

**Get all food donations by Business Id**
GET /api/food/business/:id

Returns an array with all food donations for that id:
```
[
    {
        id: 2, // this is the food id
        foodType: "vegetables",
        lbsOfFood: 10,
        preferredPickupTime: "2020-03-07 17:30:00",
        businessId: 1,
        businessName: "Business2",
        businessAddress: "456 S. Street",
        businessPhone: "1234567890"
    }
]
```

**Add a new food to be donated**
POST to /api/food

Takes an object including:
```
{
    foodType: 'new food item', // string
    lbsOfFood: 3, // integer
    preferredPickupTime: 2020-03-01 22:00:00 //datetime format
    businessId: 1 // integer - must match existing business Id
}
```
**Update existing food donation**
PUT to /api/food/:id

**Delete existing food donation**
DELETE to /api/food/:id

**Get all pending pickups (already assigned to a Volunteer Id)**
GET /api/pickups

Returns an array with all pickup objects
```
[
    {
        id: 1,
        foodType: "donuts",
        lbsOfFood: 1,
        preferredPickupTime: "2020-03-07 17:30:00",
        completed: 0,
        volunteerId: 1,
        name: "Volunteer1"
    },
    {
        id: 2,
        foodType: "vegetables",
        lbsOfFood: 10,
        preferredPickupTime: "2020-03-07 17:30:00",
        completed: 0,
        volunteerId: 2,
        name: "Volunteer2"
    },
    {
        id: 3,
        foodType: "meat",
        lbsOfFood: 5,
        preferredPickupTime: "2020-03-07 17:30:00",
        completed: 0,
        volunteerId: 3,
        name: "Volunteer3"
    }
]
```
**Get pick up by pickup Id**
GET /api/pickups/:id

Returns an object:
```
{
    id: 1,
    foodType: "donuts",
    lbsOfFood: 1,
    preferredPickupTime: "2020-03-07 17:30:00",
    completed: 0,
    volunteerId: 1,
    name: "Volunteer1"
}
```

**Get all pick ups for a Volunteer Id**
GET /api/pickups/volunteer/:id

Returns an array with all pickup objects:
```
[
    {
        id: 1, // this is the pick up id
        foodType: "donuts",
        lbsOfFood: 1,
        preferredPickupTime: "2020-03-07 17:30:00",
        completed: 0,
        volunteerId: 1,
        name: "Volunteer1"
    }
]
```

**Add donation to pick up list**
POST /api/pickups

Takes an object including:
```
{
    completed: false // returns 0 as false, 1 if true
    foodId: 1, // must be an Id of existing donation in food list
    volunteerId: 1 // must be existing volunteer Id
}
```
**Update Existing Pick Up Request**
PUT to /api/pickups/:id

**Delete Pick Up from Pickups List**
DELETE to /api/pickups/:id


**For more information regarding our Replate app, visit**

https://www.notion.so/Replate-2-Product-Vision-c7ac2c582d7b46ba8286f314d873ed9f