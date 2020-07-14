import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, View, Button, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "exoflex";
import { Header, TextInput, Picker } from "./components";
import styled from "styled-components";

import validate, { Data as FormData } from "./validation";
import {
  EDUCATIONS,
  EXPERIENCES,
  EMPLOYMENT_STATUS,
  WISHED_STATUS,
  LANGUAGES,
  INTERVIEW_AVAILABILITIES
} from "./formData";

const Container = styled(SafeAreaView)`
  flex: 1;
  background: #f6f6f7;
  padding: 16px;
`;

const Form = styled(View)`
  flex: 1;
  padding: 16px;
  border-radius: 8px;
  background: #f6f6f7;
  box-shadow: 30px 30px 59px #d1d1d2;
  margin-top: 24px;
`;

const FormContent = styled(ScrollView)`
  flex: 1;
  margin-bottom: 16px;
  border-bottom-width: 1px;
  border-color: #e2e2e2;
`;

export default function App() {
  let [formData, setFormData] = useState<FormData>({});
  let [results, setResults] = useState<any>();

  let changeValue = (inputName: keyof FormData) => (value: string) => {
    let newFormData = { ...formData, [inputName]: value };
    let res = validate(newFormData, inputName);
    setFormData(newFormData);
    setResults(res);
  };

  let submit = () => {
    // NOTE: To force re-render so validate can render any error messages
    let res = validate(formData);
    setResults(res);
    if (!res.hasErrors()) {
      Alert.alert("Form submitted.");
    }
  };

  return (
    <Provider>
      <Container>
        <StatusBar style="auto" />
        <Header />
        <Form>
          <FormContent showsVerticalScrollIndicator={false}>
            <TextInput
              name="name"
              label="Your Name"
              returnKeyType="next"
              value={formData.name}
              error={results?.hasErrors("name")}
              onChangeText={changeValue("name")}
            />
            <TextInput
              name="email"
              label="Email"
              placeholder="ex: myname@example.com"
              keyboardType="email-address"
              returnKeyType="next"
              autoCapitalize="none"
              value={formData.email}
              error={results?.hasErrors("email")}
              onChangeText={changeValue("email")}
            />
            <Picker
              data={[...EDUCATIONS]}
              name="education"
              label="Education/Training"
              selected={formData.education}
              error={results?.hasErrors("education")}
              onSelect={changeValue("education")}
            />
            <Picker
              data={[...EXPERIENCES]}
              name="experience"
              label="Experience"
              selected={formData.experience}
              error={results?.hasErrors("experience")}
              onSelect={changeValue("experience")}
            />
            <Picker
              data={[...EMPLOYMENT_STATUS]}
              name="employmentStatus"
              label="Current Employment Status"
              selected={formData.employmentStatus}
              error={results?.hasErrors("employmentStatus")}
              onSelect={changeValue("employmentStatus")}
            />
            <Picker
              data={[...WISHED_STATUS]}
              name="wishedStatus"
              label="Looking for"
              selected={formData.wishedStatus}
              error={results?.hasErrors("wishedStatus")}
              onSelect={changeValue("wishedStatus")}
            />
            <Picker
              data={[...LANGUAGES]}
              name="language"
              label="In which programming language do you feel most comfortable to take a programming skills test?"
              selected={formData.language}
              error={results?.hasErrors("language")}
              onSelect={changeValue("language")}
            />
            <Picker
              data={[...INTERVIEW_AVAILABILITIES]}
              name="interviewAvailability"
              label="If you pass our programming skills test and are selected to come to our office for an interview, what is your availability?"
              selected={formData.interviewAvailability}
              error={results?.hasErrors("interviewAvailability")}
              onSelect={changeValue("interviewAvailability")}
            />
            <TextInput
              name="startEstimate"
              label="If you are accepted, when can you start working?"
              returnKeyType="next"
              value={formData.startEstimate}
              error={results?.hasErrors("startEstimate")}
              onChangeText={changeValue("startEstimate")}
            />
            <TextInput
              name="sourceInfo"
              label="From where did you hear about KodeFox?"
              returnKeyType="done"
              value={formData.sourceInfo}
              error={results?.hasErrors("sourceInfo")}
              onChangeText={changeValue("sourceInfo")}
            />
          </FormContent>
          <Button title="Submit" onPress={submit} />
        </Form>
      </Container>
    </Provider>
  );
}
