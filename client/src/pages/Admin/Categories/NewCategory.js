import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTagRequestAsync } from "../../../redux/tags/tags.calls";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import { addCategoryRequestAsync } from "../../../redux/categories/categories.calls";
import PublishIcon from "@mui/icons-material/Publish";
import BaseButton from "../../../components/BaseButton/BaseButton";

export default function NewCategory() {
  const dispatch = useDispatch();

  const { isFetching } = useSelector((state) => state.categories);

  const validationSchema = yup.object({
    name: yup
      .string("Enter category name")
      .required("Category name is required"),
    descr: yup
      .string("Enter description")
      .required("Category description is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      descr: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(addCategoryRequestAsync(values));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Category name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="descr"
              name="descr"
              label="Category description"
              value={formik.values.descr}
              onChange={formik.handleChange}
              error={formik.touched.descr && Boolean(formik.errors.descr)}
              helperText={formik.touched.descr && formik.errors.descr}
            />
          </Grid>

          <Grid item xs={12}>
            <BaseButton
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              text={"Submit"}
              isLoading={isFetching}
              startIcon={<PublishIcon />}
            />
          </Grid>
        </Grid>
      </form>
    </>
  );
}
