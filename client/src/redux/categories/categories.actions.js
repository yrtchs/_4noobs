import CategoriesActionTypes from "./categories.types";

export const fetchCategoriesRequest = () => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesSuccess = (categories) => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

export const fetchCategoriesFailure = (errorMessage) => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES_FAILURE,
  payload: errorMessage,
});

export const addCategoryRequest = () => ({
  type: CategoriesActionTypes.ADD_CATEGORY_REQUEST,
});

export const addCategorySuccess = (category) => ({
  type: CategoriesActionTypes.ADD_CATEGORY_SUCCESS,
  payload: category,
});

export const addCategoryFailure = (errorMessage) => ({
  type: CategoriesActionTypes.ADD_CATEGORY_FAILURE,
  payload: errorMessage,
});

export const deleteCategoryRequest = () => ({
  type: CategoriesActionTypes.DELETE_CATEGORY_REQUEST,
});

export const deleteCategorySuccess = (id) => ({
  type: CategoriesActionTypes.DELETE_CATEGORY_SUCCESS,
  payload: id,
});

export const deleteCategoryFailure = (errorMessage) => ({
  type: CategoriesActionTypes.DELETE_CATEGORY_FAILURE,
  payload: errorMessage,
});
