const express = require('express');
const axios = require('axios');

const routes = express.Router();
const Dev = require('./models/Dev');

routes.post('/devs', async (request, response) => {
    const { github_username, techs  } = (request.body);

    const githubApiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, avatar_url, bio } = githubApiResponse.data;

    const techsArray = techs.split(',').map(tech => tech.trim());

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray
    })

    console.log(name, avatar_url, bio);

    return response.json(dev);
})

module.exports = routes;