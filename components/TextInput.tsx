import React from "react";
import {
  TextInput as BaseTextInput,
  TextInputProps,
  View,
  TextProps
} from "react-native";
import Text from "./Text";
import styled from "styled-components";
// @ts-ignore
import vest from "vest";

// const ERROR_COLOR = "#b00020";

export const Container = styled(View)`
  margin: 8px 0 24px;
`;

export const Label = styled(Text)`
  font-weight: 500;
  margin-bottom: 4px;
`;

const StyledTextInput = styled(BaseTextInput)`
  border-bottom-width: 1px;
  border-color: #e2e2e2;
  padding: 8px 0;
`;

export const ErrorText = styled(Text)`
  color: #b00020;
  padding: 4px 0;
`;

export type Props = TextInputProps & {
  name: string;
  label: string;
  error?: boolean;
  // NOTE: Definitely can improve this with context
  formName?: "newApplicantForm";
};

export default function TextInput(props: Props) {
  let {
    name,
    label,
    error,
    formName = "newApplicantForm",
    ...otherProps
  } = props;
  let formResult = vest.get(formName);

  let errorMessages = [
    ...formResult.getErrors(name),
    ...formResult.getWarnings(name)
  ];

  return (
    <Container>
      <Label>{label}</Label>
      <StyledTextInput
        {...otherProps}
        style={error && { borderColor: "#b00020" }}
      />
      {!!errorMessages.length && <ErrorText>{errorMessages[0]}</ErrorText>}
    </Container>
  );
}
