import React, { useState, useEffect } from 'react';
import Pages from './pages';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    //This fetch all my Resume Profile from gitconnected.com
    fetch('https://gitconnected.com/v1/portfolio/codingcodecoder')
    .then((res) => res.json())
    .then((user) => {
    setUser(user);//Set the User
  });
  }, []);

  if (!user) {
    return <div />;
  }

  return <Pages user={user} />;
}

export default App;
