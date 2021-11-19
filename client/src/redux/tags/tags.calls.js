import { api } from "../../api/api";
import {
  fetchTagsRequest,
  fetchTagsSuccess,
  fetchTagsFailure,
  addTagFailure,
  addTagSuccess,
  addTagRequest,
  deleteTagRequest,
  deleteTagSuccess,
  deleteTagFailure,
} from "./tags.actions";

export const fetchTagsRequestAsync = () => async (dispatch) => {
  dispatch(fetchTagsRequest());
  try {
    const res = await api.get("/tags");
    dispatch(fetchTagsSuccess(res.data));
  } catch (err) {
    dispatch(fetchTagsFailure());
  }
};

export const addTagRequestAsync =
  ({ name }) =>
  async (dispatch) => {
    dispatch(addTagRequest());
    try {
      const res = await api.post("/tags", { name });
      dispatch(addTagSuccess(res.data));
    } catch (err) {
      dispatch(addTagFailure(err));
    }
  };

export const deleteTagRequestAsync = (id) => async (dispatch) => {
  dispatch(deleteTagRequest());
  try {
    await api.delete(`/tags/${id}`);
    dispatch(deleteTagSuccess(id));
  } catch (err) {
    dispatch(deleteTagFailure(err));
  }
};
