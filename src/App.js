import React, { useState } from 'react';
import UserRegistration from './UserRegistration';

const App = () => {
  const [registeredUser, setRegisteredUser] = useState(null);

  const handleUserRegistered = (user) => {
    setRegisteredUser(user);
  };

  return (
    <div>
        <UserRegistration onUserRegistered={handleUserRegistered} />
    </div>
  );
};

export default App;
