import React, { useState } from 'react';
import pic1 from '../../img/pic1.jpg'; // Ensure these are the correct paths and extensions
import pic2 from '../../img/pic2.jpg';
import pic3 from '../../img/pic3.jpg';

const MainContainer = () => {
  const [drawings, setDrawings] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newDrawing, setNewDrawing] = useState({ title: '', description: '', imageUrl: '' });
  const [file, setFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDrawing({ ...newDrawing, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    const imageUrl = URL.createObjectURL(file);
    setNewDrawing({ ...newDrawing, imageUrl });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newDrawing.title && newDrawing.description && newDrawing.imageUrl) {
      setDrawings([...drawings, newDrawing]);
      setNewDrawing({ title: '', description: '', imageUrl: '' });
      setShowForm(false);
      setFile(null); // Reset file
    }
  };

  return (
    <div className='bg-red-600 p-8'>
      {/* Top Section with Add Button */}
      <div className='bg-transparent py-2 rounded-xl px-4 border text-end' >
        <button className='bg-white py-2 rounded-md px-4 text-end' onClick={() => setShowForm(true)}>Add Drawing</button>
      </div>
      {/* Drawings Grid Section */}
      <div className=' p-4 w-full bg-teal-500 gap-4'>
        <div className='bg-yellow-600 p-1 flex align-items-center justify-content-between'>
          <div style={{width:"300px"}} className='bg-orange-800 w-25 p-2 border rounded-md'>
            <img src={pic1} alt="pic1" className='w-25' />
            <h3>pic1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate commodi, fugiat quis a veniam natus velit.</p>
          </div>
          <div style={{width:"300px"}} className='bg-orange-800 w-25 p-2 border rounded-md'>
            <img src={pic2} alt="pic2" />
            <h3>pic2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate commodi, fugiat quis a veniam natus velit.</p>
          </div>
          <div style={{width:"300px"}} className='bg-orange-800 w-25 p-2 border rounded-md'>
            <img src={pic3} alt="pic3" />
            <h3>pic3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate commodi, fugiat quis a veniam natus velit.</p>
          </div>
        </div>
        <div className='bg-orange-950 p-1 flex'>
          <div style={{width:"300px"}} className='bg-orange-800 w-25 p-2 border rounded-md'>
            <img src={pic1} alt="pic1" className='w-25' />
            <h3>pic1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate commodi, fugiat quis a veniam natus velit.</p>
          </div>
          <div style={{width:"300px"}} className='bg-orange-800 w-25 p-2 border rounded-md'>
            <img src={pic2} alt="pic2" />
            <h3>pic2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate commodi, fugiat quis a veniam natus velit.</p>
          </div>
          <div style={{width:"300px"}} className='bg-orange-800 w-25 p-2 border rounded-md'>
            <img src={pic3} alt="pic3" />
            <h3>pic3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate commodi, fugiat quis a veniam natus velit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
