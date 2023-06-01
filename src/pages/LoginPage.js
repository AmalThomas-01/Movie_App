import React, { useState } from "react";
import { Button } from 'primereact/button';

import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
        
const LoginPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle div submission
  };

  return (
    <><div className="flex justify-center  text-green-500 text-xl ">Login</div>
    <div className="bg-white flex flex-row justify-center  m-10 ">

      <div className="flex flex-col flex-grow  w-1000" onSubmit={handleSubmit} >
        <div>
          <label htmlFor="name">Name:</label>
          <InputText value={name} onChange={handleNameChange} />
        </div>
        <div className="py-20 px-3">
          <label htmlFor="age">Age:</label>
          <InputNumber value={age} onValueChange={handleAgeChange} />
        </div>
        <div className="py-4">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange} />
        </div>
        <div><Button className="pl-5" label="Submit" size="small" /></div>

      </div>
    </div></>
  );
};

export default LoginPage;




        
         