import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careersData = useLoaderData();

  return <div className="careers">
    {careersData.map(career =>(
        <Link to={career.id.toString()} key={careersData.id}>
            <p>{career.title}</p>
            <p>Based in {career.id}</p>
        </Link>
    ))}
  </div>;
}

//loader function
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");

  if(!res.ok) {
    throw Error('Could not fetch the careers')
  }

  return res.json();
};
