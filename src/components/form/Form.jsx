import React, { useState } from 'react';

const hobbiesOptions = [
  'Hiking',
  'Biking',
  'Reading',
  'Fishing',
  'Hacking',
  'Cooking',
  'Running',
  'Skiing',
];

function Form() {
  const [next, setNext] = useState(0);
  const [userData, setUserData] = useState({
    userName: '',
    lastName: '',
    email: '',
    password: '',
    description: '',
    hobbies: [],
  });

  const handleSteps = () => {
    if (next <= 3) setNext(next + 1);
  };

  const renderNextButton = () => {
    if (next > 2) {
      return undefined;
    } else if (next === 2) {
      return <button onClick={handleSteps}>Finish</button>;
    } else {
      return <button onClick={handleSteps}>Next</button>;
    }
  };

  const handlePreviousButton = () => {
    if (next > 0) setNext(next - 1);
  };

  const renderPreviousButton = () => {
    if (next > 2) {
      return undefined;
    } else if (next > 0) {
      return <button onClick={handlePreviousButton}>Previous</button>;
    }
  };

  const handleChecked = (e) => {
    if (e.target.checked) {
      setUserData({
        ...userData,
        hobbies: [...userData.hobbies, e.target.value],
      });
    } else {
      setUserData({
        ...userData,
        hobbies: userData.hobbies.filter((hobby) => hobby !== e.target.value),
      });
    }
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(userData);

  return (
    <form onSubmit={handleSubmit}>
      {next === 0 && (
        <div>
          <h4>Name</h4>
          <input
            type='text'
            name='userName'
            placeholder='Name'
            onChange={handleChange}
          />
          <h4>Last Name</h4>
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            onChange={handleChange}
          />
        </div>
      )}
      {next === 1 && (
        <div>
          <h3>Email</h3>
          <input
            type='email'
            name='email'
            placeholder='Email'
            onChange={handleChange}
          />
          <h3>Password</h3>
          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={handleChange}
          />
        </div>
      )}
      {next === 2 && (
        <div>
          <h4>Description</h4>
          <textarea
            name='description'
            cols='30'
            rows='10'
            placeholder='Description'
            onChange={handleChange}
          ></textarea>
          <h4>Hobbies</h4>

          {hobbiesOptions.map((hobby, i) => (
            <div key={i}>
              <label>
                <span>{hobby}</span>
              </label>
              <input
                key={i}
                type='checkbox'
                value={hobby}
                onChange={handleChecked}
              />
            </div>
          ))}
        </div>
      )}
      {next === 3 && <h1>Success!</h1>}
      {next <= 3 && <p>{`Step: ${next} / 3`}</p>}
      {renderPreviousButton()}
      {renderNextButton()}
    </form>
  );
}

export default Form;
