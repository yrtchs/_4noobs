import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { Autocomplete, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchTagsRequestAsync } from "../../../redux/tags/tags.calls";
import { fetchCategoriesRequestAsync } from "../../../redux/categories/categories.calls";
import Grid from "@mui/material/Grid";
import { addPostRequestAsync } from "../../../redux/posts/posts.calls";
import BaseButton from "../../../components/BaseButton/BaseButton";
import PublishIcon from "@mui/icons-material/Publish";

const validationSchema = yup.object({
  title: yup.string("Enter your title").required("Title is required"),
  descr: yup
    .string("Enter your description")
    .required("Description is required"),
  content: yup.string("Enter your content").required("Content is required"),
  author: yup.string("Enter your author").required("Author is required"),
  // categories: yup
  //   .array("Enter your categories")
  //   .required("Categories is required"),
  // tags: yup.array("Enter your tags").required("Tags is required"),
});

const NewPost = () => {
  const dispatch = useDispatch();
  const { data: tags } = useSelector((state) => state.tags);
  const { data: categories } = useSelector((state) => state.categories);
  const { data: posts, isFetching } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchTagsRequestAsync());
    dispatch(fetchCategoriesRequestAsync());
  }, []);

  const initialValues = {
    title: "",
    descr: "",
    content: "",
    author: "",
    categories: [],
    tags: [],
  };

  const handleSubmit = async (values) => {
    dispatch(addPostRequestAsync(values));
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, touched, errors, values, setFieldValue }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="title"
                  name="title"
                  label="Title"
                  value={values.title}
                  onChange={handleChange}
                  error={touched.title && Boolean(errors.title)}
                  helperText={touched.title && errors.title}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="descr"
                  name="descr"
                  label="Description"
                  value={values.description}
                  onChange={handleChange}
                  error={touched.descr && Boolean(errors.descr)}
                  helperText={touched.descr && errors.descr}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="content"
                  name="content"
                  label="Content"
                  value={values.content}
                  onChange={handleChange}
                  error={touched.content && Boolean(errors.content)}
                  helperText={touched.content && errors.content}
                />
              </Grid>
              {/* TODO: To think about implementation editorJS in the future */}
              {/*<Grid item xs={12}>*/}
              {/*  <ReactEditorJS*/}
              {/*    instanceRef={(instance) => (instanceRef.current = instance)}*/}
              {/*    tools={EDITOR_JS_TOOLS}*/}
              {/*  />*/}
              {/*</Grid>*/}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="author"
                  name="author"
                  label="Author"
                  value={values.author}
                  onChange={handleChange}
                  error={touched.author && Boolean(errors.author)}
                  helperText={touched.author && errors.author}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  multiple
                  disablePortal
                  id="categories"
                  name="categories"
                  value={values.categories}
                  onChange={(e, value) => {
                    setFieldValue(
                      "categories",
                      value !== null ? value : initialValues.categories
                    );
                  }}
                  error={touched.categories && Boolean(errors.categories)}
                  helperText={touched.categories && errors.categories}
                  options={categories.map((category) => category.name)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Categories"
                      name="categories"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  multiple
                  disablePortal
                  id="tags"
                  name="tags"
                  value={values.tags}
                  onChange={(e, value) => {
                    setFieldValue(
                      "tags",
                      value !== null ? value : initialValues.tags
                    );
                  }}
                  error={touched.tags && Boolean(errors.tags)}
                  helperText={touched.tags && errors.tags}
                  options={tags.map((tag) => tag.name)}
                  renderInput={(params) => (
                    <TextField {...params} label="Tags" name="tags" />
                  )}
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewPost;
