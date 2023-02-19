import React from 'react'
import { Global } from '../../helpers/Global';
import { Petition } from '../../helpers/Petition';

export const List = ({ tshirts, setTshirts }) => {

    const deleteTshirt = (id) => {
        console.log(id);
        const data = Petition(Global.url + 'tshirts/' + id, 'DELETE');
        const updatedTshirts = tshirts.filter(tshirt => tshirt._id !== id)
        setTshirts(updatedTshirts);
    }

    return (
        <div>
            {tshirts.map((tshirt) => {
                return (
                    <div className="articulo-item" key={tshirt._id}>
                        <div className="mascara">
                            {tshirt.main_image != 'default.png' ?
                                <img src={Global.url + 'image/' + tshirt.main_image} /> :
                                <img src={Global.url + 'image/' + tshirt.main_image} />
                            }
                        </div>
                        <div className="datos">
                            <h3 className="title">{tshirt.title}</h3>
                            <p className="description">{tshirt.description}</p>
                            <p className='price'>{tshirt.price} €</p>
                            <button className="delete" onClick={() => {
                                deleteTshirt(tshirt._id)
                            }}>Borrar</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
