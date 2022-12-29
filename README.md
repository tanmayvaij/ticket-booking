# Ticket Booking Application Backend ( Node.Js )

### This is a small part of ticket booking application currently having only two features
1. fetch all available seats
2. book a seat if it is available

<br/>

Enter the below command to install all dependencies
```sh
npm install 
```

<br/>

Enter the below command to start the production build
```sh
npm start 
```

<br/>

Enter the below command to start the development server
```sh
npm run dev 
```

<br/>

Enter the below command to build a production version
```sh
npm run build 
```

<br/>

The below api is used to fetch all available seats
```sh
http://127.0.0.1:5000/api/booking/fetchseats
```

<br/>

The below api is used to book an available seats. Replace < seatNo > with a number.
```sh
http://127.0.0.1:5000/api/booking/bookseats?seatNo=<seatNo>
```
