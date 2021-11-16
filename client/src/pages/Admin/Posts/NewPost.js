import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const validationSchema = yup.object({
  title: yup.string("Enter your title").required("Title is required"),
  description: yup
    .string("Enter your description")
    .required("Description is required"),
  content: yup.string("Enter your content").required("Content is required"),
  author: yup.string("Enter your author").required("Author is required"),
  categories: yup
    .string("Enter your categories")
    .required("Categories is required"),
  tags: yup.string("Enter your tags").required("Tags is required"),
});

const NewPost = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      content: "",
      author: "",
      categories: "",
      tags: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />

        <TextField
          fullWidth
          id="description"
          name="description"
          label="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />

        <TextField
          fullWidth
          id="content"
          name="content"
          label="Content"
          value={formik.values.content}
          onChange={formik.handleChange}
          error={formik.touched.content && Boolean(formik.errors.content)}
          helperText={formik.touched.content && formik.errors.content}
        />

        <TextField
          fullWidth
          id="author"
          name="author"
          label="Author"
          value={formik.values.author}
          onChange={formik.handleChange}
          error={formik.touched.author && Boolean(formik.errors.author)}
          helperText={formik.touched.author && formik.errors.author}
        />

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NewPost;
