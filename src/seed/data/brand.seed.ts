
import { v4 as uuid } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';



export const BRAND_SEED:Brand[]=[

    {
        id:uuid(),
       name:'Volvo',
       createAt:new Date().getTime()
    },
    {
        id:uuid(),
       name:'Holda',
       createAt:new Date().getTime()
    },

    {
        id:uuid(),
        name:'Jeep',
        createAt:new Date().getTime()
    },

    

]