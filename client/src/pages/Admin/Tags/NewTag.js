import * as React from "react";
import { useDispatch } from "react-redux";
import { addTagRequestAsync } from "../../../redux/tags/tags.calls";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { useFormik } from "formik";

export default function NewTag() {
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    title: yup.string("Enter some tag").required("Tag is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(addTagRequestAsync(values));
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="tag"
          name="title"
          label="Tag"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}
