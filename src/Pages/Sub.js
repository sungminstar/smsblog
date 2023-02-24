import { useParams } from "react-router-dom";

const Sub = () => {
  const paramsA = useParams();
  const paramsB = useParams();

  return (
    <div>
      <p>{ Number(paramsA.a) - Number(paramsB.b) }</p>
    </div>
  );
}

export default Sub;