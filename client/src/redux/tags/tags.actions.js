import TagsActionTypes from "./tags.types";

export const fetchTagsRequest = () => ({
  type: TagsActionTypes.FETCH_TAGS_REQUEST,
});

export const fetchTagsSuccess = (Tags) => ({
  type: TagsActionTypes.FETCH_TAGS_SUCCESS,
  payload: Tags,
});

export const fetchTagsFailure = (errorMessage) => ({
  type: TagsActionTypes.FETCH_TAGS_FAILURE,
  payload: errorMessage,
});

export const addTagRequest = () => ({
  type: TagsActionTypes.ADD_TAG_REQUEST,
});

export const addTagSuccess = (tag) => ({
  type: TagsActionTypes.ADD_TAG_SUCCESS,
  payload: tag,
});

export const addTagFailure = (errorMessage) => ({
  type: TagsActionTypes.ADD_TAG_FAILURE,
  payload: errorMessage,
});
