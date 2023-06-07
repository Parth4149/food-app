import { Link } from "react-router-dom";

const NoData = () => {
  return (
    <section className="mt-24 align-center">
      <h2>Something went wrong</h2>
      <h3 className="mt-24" style={{ textDecoration: "underline" }}>
        <Link to="/">Go to Home</Link>
      </h3>
    </section>
  );
};

export default NoData;
