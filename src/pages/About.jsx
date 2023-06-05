import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="mt-24 align-center">
        <h2>About us page</h2>
      </div>
      <Outlet />
    </>
  );
};

export default About;
