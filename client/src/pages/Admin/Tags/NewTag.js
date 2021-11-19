import * as React from "react";
import { useDispatch } from "react-redux";
import { addTagRequestAsync } from "../../../redux/tags/tags.calls";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";

export default function NewTag() {
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    name: yup.string("Enter tag name").required("Tag name is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(addTagRequestAsync(values));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="tag"
              name="name"
              label="Tag name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
