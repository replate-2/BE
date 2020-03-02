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
    businessPhone: 1234567890 // integer
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
    phoneNumber: 1234567890 // integer
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

**Update Business Profile**
PUT to /api/users/business/:id

**Delete Business Profile**
DELETE to /api/users/business/:id

**Update Volunteer Profile**
PUT to /api/users/volunteer/:id

**Delete Volunteer Profile**
DELETE to /api/users/volunteer/:id

**Get list of all food donations**
GET /api/food

Returns an object with the following:
```
{
    id: 1,
    foodType: "donuts",
    lbsOfFood: 1,
    preferredPickupTime: "2020-03-07 17:30:00",
    businessName: "Business1",
    businessAddress: "123 N. Street",
    businessPhone: 1234567890
}
```
**Get food donation by Id**
GET /api/food/:id

**Get all food donations by Business Id**
GET /api/food/business/:id

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

Returns an object with the following info:
```
{
    id: 1,
    foodType: "donuts",
    lbsOfFood: 1,
    preferredPickupTime: "2020-03-07 17:30:00",
    completed: 0, // 0 is false, 1 is true
    name: "Volunteer1"
    }
```
**Get pick up by pickup Id**
GET /api/pickups/:id

**Get all pick ups for a Volunteer Id**
GET /api/pickups/volunterr/:id

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

