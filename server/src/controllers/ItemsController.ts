import knex from '../database/connection';
import { Request, Response } from 'express';

require('dotenv').config();

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');   //SELECT * FROM items

        const serializedItems = items.map(item => {
            return {
                id: item.id,
                name: item.title,
                image_url: `${process.env.HOST}/uploads/${item.image}`
            };
        });

        return response.json(serializedItems);
    }
}

export default ItemsController;