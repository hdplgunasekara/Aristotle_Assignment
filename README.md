# Aristotle_Assignment
Nest JS , React Js , Mongo DB , TypeScript

Frontend Live Url (Netlify) - https://6436ded14987a9006e1965d4--capable-truffle-7b70c6.netlify.app/

Backend Live Url (Railway) - https://aristotleassignment-production.up.railway.app/


About App - 
 In first page you can seen all the pending leads as table with name , company name, designation , personalization line and View more button.If you click view more button it will open modal box with all lead details.In bottom you can see two button as All Good and Not a Good Fit.If you click All Good it will update lead status as Accepted.If you click Not a Good Fit it will open text box for type feedback,After typing feedback you can click add feedback button.If you click Add Feedback button it will update lead status as Rejected and add Feedback column with typed feedback.When opening feedback filling text box both All Good and Not a Good Fit buttons will hide,You can view them again and hide add feedback text box by clicking cancel.

Sometimes in lead modal box it will show red color error message at bottom as 'You can't accept or reject this lead because provided Email in Invalid',That means email you provided to lead is not valid email.In that case you you will not be able to see both All Good and Not a Good Fit buttons,Only you will able to close modal box clicking close button

API end point

1.For create lead send POST request with json object to - https://aristotleassignment-production.up.railway.app/leads
  json object format -
  {
        "firstName": "Amal",
        "lastName": "Silva",
        "email": "amal@gmail.com",
        "company": "Hapsus",
        "jobTitle": "Data Engineer ",
        "personalizationLine": "sample personalization line",
        "status": "Pending"
  }
  
2.For get all leads send GET request to - https://aristotleassignment-production.up.railway.app/leads

3.For update lead(status and feedback) send patch request to - https://aristotleassignment-production.up.railway.app/leads
with lead id in params and status and feedback in body as json

4.For validate any email address send post request to - https://aristotleassignment-production.up.railway.app/email
with email in body as json(if email valid it will return true if not valid it will return false)


clone this repo to your system

```
git clone https://github.com/hdplgunasekara/Aristotle_Assignment.git
```

For frontend

```
cd frontend
```

For run frontend

```
npm i
npm start
```

For backend

```
cd backend
```

for run backend

```
npm i
npm run start:dev 
```

If you want to run backend unit testing go to backend folder and type  (Not completed)

```
npm run test:watch
```

Thank you,Regards