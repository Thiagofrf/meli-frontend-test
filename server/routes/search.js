import axios from 'axios';
import express from 'express'
const router = express.Router()

export default router.get('/api/items', (req, res) => {
    const query = req.query.q;
    
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    .then(response => {
        let filteredItems = response?.data?.results?.slice(0, 4)
        let formattedItems = []

        filteredItems.map((item) => {
            formattedItems.push({
                id: item?.id,
                title: item?.title,
                price: {
                    currency: item?.currency_id,
                    amount: item?.available_quantity,
                    decimals: item?.price
                },
                picture: item?.thumbnail,
                condition: item?.condition,
                free_shipping: item?.shipping?.free_shipping
            })
        })


        const data = {
            author: {
                name: "Non Used Data",
                lastname: "Non Used Data",
            },
            categories: response?.data?.available_filters?.find(obj => obj.id === 'category'),
            items: formattedItems
        }

      return res.send(data)
    })
    .catch(err => {
      return console.error('Error getting item: ', err)
    })
})
