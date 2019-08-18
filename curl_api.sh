
curl -H 'Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyIiwiaWF0IjoxNTY2MTQxNDE0LCJleHAiOjE1NjY1NzM0MTR9.AQRmE0YkH3VMXhbBmQTmV4wsbvkCqmPkjlnbD0dQSlM' "http://localhost:3000/v1/branch?city=chennai&name=hdfc%20bank&page=1&limit=10" | python -m json.tool
curl -H 'Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyIiwiaWF0IjoxNTY2MTQxNDE0LCJleHAiOjE1NjY1NzM0MTR9.AQRmE0YkH3VMXhbBmQTmV4wsbvkCqmPkjlnbD0dQSlM' "http://localhost:3000/v1/bank/IDIB000J037" | python -m json.tool
