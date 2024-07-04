import axios from 'axios';
import express from 'express'
const router = express.Router()

export default router.get('/api/items/:id', (req, res) => {
    const { id } = req.params;
    axios.get(`https://api.mercadolibre.com/items/${id}`)
    .then(response => {
        axios.get(`https://api.mercadolibre.com/items/${id}/description`)
        .then(descriptionResponse => {
            const data = {
                author: {
                name: "Non Used Data",
                lastname: "Non Used Data"
                },
                item: {
                id: response.data.id,
                title: response.data.title,
                price: {
                    currency: response.data.currency_id,
                    amount: response.data.initial_quantity,
                    decimals: response.data.price
                },
                picture: response.data.pictures[0].url,
                condition: response.data.condition,
                free_shipping: response.data.shipping.free_shipping,
                sold_quantity: response.data.sold_quantity,
                description: descriptionResponse.data.plain_text
                }
            }

            return res.send(data) 
        })
        .catch(err => {
            return console.error('Error getting product description: ', err)
        })
    })
    .catch(err => {
        return console.error('Error getting item: ', err)
    })
})
