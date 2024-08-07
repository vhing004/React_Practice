import { useEffect, useState } from "react";
// 'https://dummyjson.com/users'
function SearchApiUser() {
  const [users, setUsers] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [input, setInput] = useState('')
  const [error, SetError] = useState(false);

  const fetchSearchApi = async () => {
    try {
      SetLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const userData = await response.json();

      if(userData&& userData.users) {
        setUsers(userData.users.map(item => item.firstNames))
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSearchApi();

  }, []);

  if (loading) {
    return <div>Loading data !!!!!</div>;
  }
  console.log(users);
  return (
    <div className="wrapper">
      <input type="text" value={input} />
    </div>
  );
}

export default SearchApiUser;
