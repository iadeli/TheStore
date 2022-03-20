import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField as FormField, FormPicker as Picker, SubmitButton } from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";

function ListingEditScreen() {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
  });

  const categories = [
    { label: "Furniture", value: 1, backgroundColor:"#fd7d6f", icon:"lamp" },
    { label: "Cars", value: 2, backgroundColor:"#ffa85a", icon:"car" },
    { label: "Cameras", value: 3, backgroundColor:"#ffd655", icon:"camera" },
    { label: "Games", value: 4, backgroundColor:"#6dd592", icon:"cards" },
    { label: "Clothing", value: 5, backgroundColor:"#63c7c5", icon:"shoe-heel" },
    { label: "Sports", value: 6, backgroundColor:"#62aff9", icon:"basketball" },
    { label: "movies & Music", value: 7, backgroundColor:"#5887f0", icon:"headphones" },
    { label: "Books", value: 8, backgroundColor:"#a57bef", icon:"book-open-variant" },
    { label: "Other", value: 9, backgroundColor:"#8294ab", icon:"application" },
  ];

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ListingEditScreen;
