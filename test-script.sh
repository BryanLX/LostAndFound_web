#!/bin/bash
read -p $'Press Enter to execute each test'
read -p $'TEST:Sign up normally'
curl -X POST http://localhost:3000/user/signup \
     -H "Content-Type: application/json; charset=utf-8" \
     -d '{
  "username": "Jianda Chen",
  "email": "jianda.chen@mail.utoronto.ca",
  "password": "123123"
}'

read -p $'\nTEST:Sign up with existing email'
curl -X POST http://localhost:3000/user/signup \
     -H "Content-Type: application/json; charset=utf-8" \
     -d '{
  "username": "Jianda Chen",
  "email": "jianda.chen@mail.utoronto.ca",
  "password": "123124123"
}'

read -p $'\nTEST:Sign in with wrong username'
curl -X POST http://localhost:3000/user/login \
     -H "Content-Type: application/json; charset=utf-8" \
     -d '{
  "email": "aaa",
  "password": "12345676"
}'

read -p $'\nTEST:Sign with wrong password'
curl -X POST http://localhost:3000/user/login \
     -H "Content-Type: application/json; charset=utf-8" \
     -d '{
  "email": "jianda.chen@mail.utoronto.ca",
  "password": "aaa"
}'

read -p $'\nTEST:Sign in normally'
curl -X POST http://localhost:3000/user/login \
     -H "Content-Type: application/json; charset=utf-8" \
     -d '{
  "email": "jianda.chen@mail.utoronto.ca",
  "password": "123123"
}'

read -p $'\nTEST:generate a serial code'
curl -X POST http://localhost:3000/user/serial \
     -H "Content-Type: application/json; charset=utf-8" \
     -d '{
  "email": "jianda.chen@mail.utoronto.ca"
}'

read -p $'\nTEST:Upload a item, return success status on success'
curl -X POST http://localhost:3000/item/upload \
     -H "Content-Type: application/json; charset=utf-8" \
     -d '{
  "location": [1.00, 2.00],
  "name": "computer",
  "color": "black",
  "questions": [{
  	"question": "what is your name",
  	"answer": "kinder"
  },
  {
  	"question": "what is your school",
  	"answer": "uoft"
  }],
  "email": "jianda.chen@mail.utoronto.ca",
  "img": "/desktop/profile.jpg"
}'

read -p $'\nTEST:Search for a item'
curl -X POST http://localhost:3000/item/search \
     -H "Content-Type: application/json; charset=utf-8" \
     -d '{
  "location": [1.00, 2.00],
  "name": "computer",
  "color": "black"
}'



