import * as React from "react";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addTagRequestAsync } from "../../../redux/tags/tags.calls";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { useFormik } from "formik";

export default function NewTag() {
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    name: yup.string("Enter your tag name").required("Tag is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(addTagRequestAsync(values));
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Typography component="h1" variant="h5">
        New Tag
      </Typography>

      <div>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="tag"
            name="name"
            label="Tag"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
