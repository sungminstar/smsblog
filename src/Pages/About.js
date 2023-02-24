import { Link } from "react-router-dom";
import styled from "styled-components";

const About = () => {
  return (
    <div>
      <p>About 페이지 입니다</p>
      <Link to = "/">
        <Text>소개페이지 이동</Text>
      </Link>
    </div>
  );
}

const Text = styled.p`
  color: white;
  width: 30px;
  background-color: purple;

`;
export default About;