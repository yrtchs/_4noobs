import {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  addCategoryRequest,
  addCategorySuccess,
  addCategoryFailure,
  deleteCategoryRequest,
  deleteCategorySuccess,
  deleteCategoryFailure,
} from "./categories.actions";
import { api } from "../../api/api";

export const fetchCategoriesRequestAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesRequest());
  try {
    const res = await api.get("/categories");
    dispatch(fetchCategoriesSuccess(res.data));
  } catch (err) {
    dispatch(fetchCategoriesFailure());
  }
};

export const addCategoryRequestAsync = (payload) => async (dispatch) => {
  dispatch(addCategoryRequest());
  try {
    const res = await api.post("/categories", payload);
    dispatch(addCategorySuccess(res.data));
  } catch (err) {
    dispatch(addCategoryFailure(err));
  }
};

export const deleteCategoryRequestAsync = (id) => async (dispatch) => {
  dispatch(deleteCategoryRequest());
  try {
    await api.delete(`/categories/${id}`);
    dispatch(deleteCategorySuccess(id));
  } catch (err) {
    dispatch(deleteCategoryFailure(err));
  }
};
