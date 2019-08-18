# bank_api

Setup :
install docker-compose.

run "sudo doucker-compose build" - build the server
run "sudo docker-compose up" - run the server

To check the Endpoints:
  run "./curl_api.sh"
  
End Points:

run "node jwt.js" - to get the authentication token.

1. http://localhost:3000/v1/bank/{{ifsc_code}} - to get bank details
2. http://localhost:3000/v1/branch?city={{city}}&name={{bank name}}&page=1&limit=10 - (page and limit are optioanl)

Add the JWT Token in header as Authorization: Bearer {JWT Token}.

Bash Commands:

1.curl -H 'Authorization:Bearer
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyIiwiaWF0IjoxNTY2MTQxNDE0LCJleHAiOjE1NjY1NzM0MTR9.AQRmE0YkH3VMXhbBmQTmV4wsbvkCqmPkjlnbD0dQSlM' "http://localhost:3000/v1/bank/IDIB000J037" | python -m json.tool

2. curl -H 'Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyIiwiaWF0IjoxNTY2MTQxNDE0LCJleHAiOjE1NjY1NzM0MTR9.AQRmE0YkH3VMXhbBmQTmV4wsbvkCqmPkjlnbD0dQSlM' "http://localhost:3000/v1/branch?city=chennai&name=hdfc%20bank&page=1&limit=10" | python -m json.tool




