import React, { useState, useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import { Petition } from '../../helpers/Petition';
import { Global } from '../../helpers/Global';
import { useParams } from 'react-router-dom';


export const Edit = () => {
  const [resultado, setResultado] = useState('');
  const { formulario, enviado, cambiado } = useForm({});
  const [ tshirt, setTshirt ] = useState({}); 
  const params = useParams();

  useEffect(() => {
    getTshirt()
  },[])

  const getTshirt = async () => {
    const data = await Petition(Global.url + 'tshirts/' + params.id);
    console.log(data);
    if (data.status == 'Success') {
      setTshirt(data.tshirt);
    }
  }

  const editTshirt = async (e) => {
    e.preventDefault();
    let editedTshirt = formulario;
    const datos  = await Petition(Global.url + 'tshirts/' + params.id, 'PUT', editedTshirt);
    if (datos.status == 'Success') {
      setResultado('Saved');
    } else {
      setResultado('Not saved')
    }
    // Upload image
    const fileInput = document.querySelector('#file0');
    console.log(fileInput.value);
    if (datos.status == 'Success' && fileInput.files[0]) {
      setResultado('Saved');
      const formData = new FormData();
      formData.append('file0', fileInput.files[0]);
      const upload = await Petition(Global.url + 'upload-image/' + params.id, 'POST', formData, true);
      console.log(upload);
      if (upload.status === 'Success') {
        setResultado('Saved')
      } else {
        setResultado('Not saved')
      }
    }
  }

  return (
    <form className="formulario" onSubmit={editTshirt}>
      <h3>Edit tshirt: {tshirt.title}</h3>
      <div>
        {resultado === 'Saved' ? <p>Tshirt saved succesfully</p> : ''}
        {resultado === 'Not saved' ? <p>We couldn't save the tshirt</p> : ''}
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={cambiado} defaultValue={tshirt.title}/>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea type="text" name="description"  onChange={cambiado} defaultValue={tshirt.description}/>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" name="price" step='any'  onChange={cambiado} defaultValue={tshirt.price}/>
        </div>
        <div className="form-group">
          <label htmlFor="file0">Image</label>
          <img src={Global.url + 'image/' + tshirt.main_image} width='40' alt="tshirt_image" />
          <input type="file" name="file0" id='file0' onChange={cambiado} />
        </div>
        <input type="submit" value="Save" className='btn btn-success'  />
      </div>
    </form>

  )
}
