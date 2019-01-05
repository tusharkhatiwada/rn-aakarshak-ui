import React from "react";
import styled from "styled-components/native";

import colors from "../../constants/colors";

const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: ${colors.green};
`;
const StyledText = styled.Text`
  color: ${colors.white};
`;

const Button = () => {
  return (
    <StyledTouchableOpacity>
      <StyledText>Button</StyledText>
    </StyledTouchableOpacity>
  );
};

export default Button;
