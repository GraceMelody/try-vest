import React, { useState } from "react";
import styled from "styled-components";
import { RichRadio } from "exoflex";
// @ts-ignore
import vest from "vest";
import {
  Container,
  Label,
  ErrorText,
  Props as TextInputProps
} from "./TextInput";

type Props<T> = Pick<TextInputProps, "name" | "label" | "formName"> & {
  data: Array<{ label: string; value: T }>;
  selected?: T;
  error?: boolean;
  onSelect?: (value: T) => void;
};

export default function Picker<T>(props: Props<T>) {
  let {
    name,
    label,
    data,
    selected,
    error,
    onSelect,
    formName = "newApplicantForm"
  } = props;
  let formResult = vest.get(formName);

  let errorMessages = [
    ...formResult.getErrors(name),
    ...formResult.getWarnings(name)
  ];

  return (
    <Container>
      <Label>{label}</Label>
      <RichRadio.Group
        data={data}
        keyExtractor={item => item.label}
        renderItem={({ item, index }) => (
          <RichRadio.Item
            firstItem={index === 0}
            label={item.label}
            selected={item.value === selected}
            style={error && { borderColor: "#b00020" }}
            // textStyle={error && { color: "#b00020" }}
            onPress={() => onSelect && onSelect(item.value)}
          />
        )}
      />
      {!!errorMessages.length && <ErrorText>{errorMessages[0]}</ErrorText>}
    </Container>
  );
}
