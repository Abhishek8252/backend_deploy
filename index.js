const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

const githubData = {
    "login": "Abhishek8252",
    "id": 109435098,
    "node_id": "U_kgDOBoXY2g",
    "avatar_url": "https://avatars.githubusercontent.com/u/109435098?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Abhishek8252",
    "html_url": "https://github.com/Abhishek8252",
    "followers_url": "https://api.github.com/users/Abhishek8252/followers",
    "following_url": "https://api.github.com/users/Abhishek8252/following{/other_user}",
    "gists_url": "https://api.github.com/users/Abhishek8252/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Abhishek8252/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Abhishek8252/subscriptions",
    "organizations_url": "https://api.github.com/users/Abhishek8252/orgs",
    "repos_url": "https://api.github.com/users/Abhishek8252/repos",
    "events_url": "https://api.github.com/users/Abhishek8252/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Abhishek8252/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2022-07-16T18:44:42Z",
    "updated_at": "2024-09-07T03:14:12Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('abhi8252')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
//   console.log(process.env.port)
})