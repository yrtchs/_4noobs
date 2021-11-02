import { api } from "../../api/api";
import {
  fetchTagsRequest,
  fetchTagsSuccess,
  fetchTagsFailure,
  addTagFailure,
  addTagSuccess,
  addTagRequest,
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

export const addTagRequestAsync = (payload) => async (dispatch) => {
  dispatch(addTagRequest);
  try {
    const res = await api.post("/tags", { payload });
    dispatch(addTagSuccess(res.data));
  } catch (err) {
    dispatch(addTagFailure());
  }
};
