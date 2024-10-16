import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { getUsers } from './redux/userSlice';
import './App.css';

function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  console.log(user);

  return (
    <div className="container"><h2> Fetched User Data :- </h2>
      {user?.map((userData: any) => (
        <div className="user-card" key={userData.email}>
          <h2>Email : {userData.email}</h2>
          <h2>Name : {userData.name}</h2>
          <h2>Phone : {userData.phone}</h2>
          <h2>Website : {userData.website}</h2>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
