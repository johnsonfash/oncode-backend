# TempleHS Backend

Online link:   http://backnd.com

### To clone project:

`git clone https://github.com/johnsonfash/templehs.git`

### To prepare, install modules on local machine:

```
cd templehs-backend
npm install
```

### To seed database locally

1.  Add `.env` file at the base of project root and add below keys:
    
    ```
    DATABASE_URL="postgresql://<user_name>:<db_password>@localhost:5432/<db_name>?schema=public"
    JWT_SECRET="<any_secret_key_string>"
    ```
    
2.  `npm run dev`
    
3.  Goto link: `http://localhost:5000/seed`