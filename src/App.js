import React, { useState } from 'react';
import './App.css'
function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [search, setSearch] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone) {
      const newContact = { name, phone };
      if (contacts.some(c => c.name === name || c.phone === phone)) {
        alert('Name or phone number already exists');
      } else {
        setContacts([...contacts, newContact]);
        setName('');
        setPhone('');
      }
    }
  };

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      const newContacts = [...contacts];
      newContacts.splice(index, 1);
      setContacts(newContacts);
    }
  };

  const handleSort = () => {
    setSortAsc(!sortAsc);
    const sortedContacts = [...contacts].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return sortAsc ? -1 : 1;
      }
      if (nameA > nameB) {
        return sortAsc ? 1 : -1;
      }
      return 0;
    });
    setContacts(sortedContacts);
  };

  const filteredContacts = contacts.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
   var SrNo = 1;
  return (
    <div className="App">
      {/* <div class='person-section'>
      <h1>Person Details</h1>
      <form onSubmit={handleSubmit} className='Person-details'>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button className='save-btn' type="submit">Add Contact</button>
      </form>
      </div> */}
      <section class='person-section'>
        <div className='Person-details'>
        <p>Person Name</p>
          <form onSubmit={handleSubmit} >
              <div>
              <label htmlFor='firstName'>
                    <h4>Name</h4>
                    <input type="text" placeholder='Name' id='firstName'  onChange={(e) => setName(e.target.value)}/>
                </label>
                
                <label htmlFor='contact'>
                    <h4>Contact Number</h4>
                    <input type="text" placeholder='Contact Number' id='contactNumber'  onChange={(e) => setPhone(e.target.value)}/>
                </label>
               
                </div>
                <input type="submit" value='Save' className='save-btn'/>
          </form>
          </div>
      </section>
      <section>
      <div className="search">
              
              <input type="text" placeholder='Search by Name' value={search} onChange={(e) => setSearch(e.target.value)}/>
              {/* <img  alt="search" width="18" className='search-icon'/> */}
          
       </div>
      </section>
      
      {/* <input className="search" type="text" placeholder="Search by name" value={search} onChange={(e) => setSearch(e.target.value)} /> */}
      <div className='display-details'>
      <table >
        <thead >
          <tr>
            <th className='size1'>Sr NO</th>
            <th className='size2' onClick={handleSort}>Name</th>
            <th className='size2'> Phone</th>
            <th className='size1'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((c, index) => (
            <tr className='row' key={index}>
              <td >{SrNo++}</td>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App