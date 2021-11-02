import {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  addCategoryRequest,
  addCategorySuccess,
  addCategoryFailure,
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
  dispatch(addCategoryRequest);
  try {
    const res = await api.post("/categories", { payload });
    dispatch(addCategorySuccess(res.data));
  } catch (err) {
    dispatch(addCategoryFailure());
  }
};
