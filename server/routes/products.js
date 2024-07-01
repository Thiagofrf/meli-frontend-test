import axios from 'axios';
import express from 'express'
const app = express();

export default app.get('/items/:id', (req, res) => {
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