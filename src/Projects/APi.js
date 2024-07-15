 
import axios from 'axios'

export async function getdata() {
  return await axios.get('http://localhost:4200/products')
}

export async function deletedata(id) {
  return await axios.delete(`http://localhost:4200/products/${id}`)
}

export async function postdata(data) {
  return await axios.post('http://localhost:4200/products',data,{
    headers:{
      'Content-Type':'application/json'
    }
  })
}

export async function putdata(id,data) {
  return await axios.put('http://localhost:4200/products'+'/'+id,data,{
    headers:{
      'Content-Type':'application/json'
    }
  })
}
