import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <section className="mt-24 align-center">
      <h1>{error?.status} {error?.statusText}</h1>
      <h2>{error?.data}</h2>
      <p className="mt-24">{error?.error?.stack}</p>
    </section>
  );
};

export default Error;
