## Auth Service
- includes sign up and login
- sigup flow is {middleware -> create user (controller , service, repository} -> now in models we will use beforeCreate() hook to trigger password hashing before creating a user.
- signIn flow is { middleware -> check if user exists -> if exist verify the password -> generate a JWT token-> return this JWT.}
- verify JWT {check if valid jwt-> it will return the user-> check if this user Exists-> id exist return userid}
-isAdmin {get the user with currenti->get that role where role==ADMIN-> return user.hasRole(role)}