import { useEffect, useState } from "react";
import "./finder.css";
import UserName from "./userName";
import useDebounce from "./useDebounce";

function GithubFinder() {
  const [userName, setUserName] = useState("vinh");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [val, setVal] = useState(false);

  const debounce = useDebounce(userName, 500);
  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${debounce}`);
      const dataUser = await response.json();

      if (dataUser) {
        setLoading(false);
        setUserData(dataUser);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    if (userName === "") {
      setVal(true);
    } else {
      setVal(false);
      fetchUserData();
    }
  };

  if (loading) {
    return <div>Loading data ! PLEASE WAIT</div>;
  }
  return (
    <div className="wrapper">
      <div className="github">
        <div className="container">
          <div className="input">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button className="github_btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
        <p className={`${val ? "noError" : "error"} `}>
          Vui long nhap vao truong nay !!!!
        </p>
      </div>
      {(userData !== null) ? <UserName user={userData} /> : null}
    </div> 
  );
}

export default GithubFinder;
