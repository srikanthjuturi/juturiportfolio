 
 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Calculator from './Projects/Calculator';
import Todo from './Projects/Todo';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Tasks from './Components/Tasks';
import About from './Components/About';
import Errorpage from './Components/Errorpage';
import Counter from './Projects/Counter';
import Login from './Projects/Login';
import Table from './Projects/Table';
import Form from './Projects/Form';
import {getdata,deletedata, postdata, putdata} from './Projects/APi'
import { useEffect, useState } from 'react';

function App() {
  let [products,setproducts]=useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editform, seteditform] = useState(false);
  let [initialdata,setinitialdata]=useState({
    name:'',
    price:'',
    categorey:''
  });

  const closeForm = () => {
    setIsFormOpen(false);
    setinitialdata('')
  };

  const openForm = () => {
    setIsFormOpen(true);
  };
  useEffect(()=>{
    getproducts()
  },[])

  let getproducts = async () => {
    try {
      const gettedData = await getdata();
      setproducts(gettedData.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
 
  let deleteproducts = async (id) => {
    try {
       await deletedata(id);
       getproducts()
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  let postproducts = async (products) => {
   let data={
      name:products.name,
      price:products.price,
      categorey:products.categorey
    }
    try {
      if(editform){
        await putdata(products.id,data) 
      }
      else{
     await postdata(data);
       getproducts()
       setIsFormOpen(false)
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  let editproducts = async (data) => {
    try {
      setinitialdata(data)
       setIsFormOpen(true)
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
 


  return (
    <div >
      <BrowserRouter>
       <Navbar/>
      <Routes>
      <Route path='*' element={<Errorpage/>}/>
      <Route path='/' element={<Intro/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='Projects' element={<Projects/>}/>
        <Route path='education' element={<Education/>}/>
        <Route path='tasks' element={<Tasks/>}/>
        <Route path='contactme' element={<ContactMe/>}/>
        <Route path='todo' element={<Todo/>}/>
        <Route path='calculator' element={<Calculator/>}/>
        <Route path='counter' element={<Counter/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='form' element={<Form  />}/>
        <Route path='Table'  element={<Table products={products} edit={editproducts} adddata={postproducts}  delete={deleteproducts}  open={openForm} close={closeForm} isFormOpen={isFormOpen} initialdata={initialdata}/>}/>
         
      </Routes> 
     
    <Footer/>
      </BrowserRouter>
   
   
 
    </div>
  );
}

export default App;
