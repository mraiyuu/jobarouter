import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
  const { id } = useParams();
  const carreerDetailsData = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {carreerDetailsData.title}</h2>
      <p>Starting Salary: {carreerDetailsData.salary}</p>
      <p>Location: {carreerDetailsData.location}</p>
      <div className="details">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem
          odit quisquam officiis amet facilis velit temporibus id error beatae
          illo tenetur quasi quo blanditiis corporis non, pariatur distinctio
          nemo?
        </p>
      </div>
    </div>
  );
};

export default CareerDetails;

//loader function
export const careersDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error('Could not find that career')
  }

  return res.json();
};
