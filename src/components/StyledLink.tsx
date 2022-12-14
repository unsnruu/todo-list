import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  padding: 1rem;
  border-radius: 1rem;
  text-decoration: none;
  color: inherit;
  & :visited {
    color: inherit;
  }
`;

export default StyledLink;
