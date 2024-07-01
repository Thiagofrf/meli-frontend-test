import axios from 'axios';
const express = require('express');
const app = express();

app.get('/api/items?q=:query', (req, res) => {
    const getQuery = async (body) => {
        const options = {
            'method': 'GET',
            'url': 'https://api.mercadolibre.com/sites/MLA/search?q=:query',
            'headers': {
                'Content-Type': 'application/json'
            },
            data: {
                body
            }
        };

        try {
            const result = await axios(options)
            console.log(result)
            return result
        } catch (e) {
            console.log(e)
        }
    }

    getQuery(req.body)
})