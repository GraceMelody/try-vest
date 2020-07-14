import React from "react";
import { View } from "react-native";
import Text from "./Text";
import styled from "styled-components";

const Title = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  padding: 4px 0;
`;

const Description = styled(Text)`
  padding: 4px 0;
  font-weight: 300;
`;

export default function Header() {
  return (
    <View>
      <Title>Apply to join KodeFox - Software Programmer</Title>
      <Description>
        KodeFox is a fun team of software and product developers building mobile
        apps for startups and companies around the world. If you have a passion
        for excellence, strong coding abilities and good English skills, join a
        fun team of smart, talented people building great software.
      </Description>
    </View>
  );
}
