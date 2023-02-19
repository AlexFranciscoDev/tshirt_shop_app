import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { Petition } from '../../helpers/Petition';
import { Global } from '../../helpers/Global';

export const Add = () => {
  const [resultado, setResultado] = useState('');
  const { formulario, enviado, cambiado } = useForm({});

  const saveTshirt = async (e) => {
    e.preventDefault();
    let newTshirt = formulario;
    const datos = await Petition(Global.url + 'save', 'POST', newTshirt);
    if (datos.status === 'Success') {
      setResultado('Saved')
    } else {
      setResultado('Not saved');
    }

    const fileInput = document.querySelector('#file0');
    
    if (datos.status === 'Success' && fileInput.files[0]) {
      const formData = new FormData();
      formData.append('file0', fileInput.files[0]);
      const uploadImage = Petition(Global.url + 'upload-image/' + datos.savedTshirt._id, 'POST', formData, true);
      if (uploadImage.status === 'Success') {
        setResultado('Saved');
      } else {
        setResultado('Not saved');
      }
    }
  }

  return (
    <form className="formulario" onSubmit={saveTshirt}>
      <div>
        {resultado === 'Saved' ? <p>Tshirt saved succesfully</p> : ''}
        {resultado === 'Not saved' ? <p>We couldn't save the tshirt</p> : ''}
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={cambiado} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea type="text" name="description" onChange={cambiado} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" name="price" step='any' onChange={cambiado} />
        </div>
        <div className="form-group">
          <label htmlFor="file0">Image</label>
          <input type="file" name="file0" id='file0' />
        </div>
        <input type="submit" value="Save" className='btn btn-success' onChange={cambiado} />
      </div>
    </form>

  )
}
