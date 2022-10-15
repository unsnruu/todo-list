import { useEffect } from "react";
import { Link } from "react-router-dom";

function AppHome() {
  useEffect(() => {}, []);

  return (
    <div>
      <h1>Home</h1>
      <Link to="todo/test">go to test</Link>
    </div>
  );
}

export default AppHome;
