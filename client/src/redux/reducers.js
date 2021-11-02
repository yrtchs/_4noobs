import { combineReducers } from "redux";
import authReducer from "./auth/auth.reducer";
import postsReducer from "./posts/posts.reducer";
import categoriesReducer from "./categories/categories.reducer";
import tagsReducer from "./tags/tags.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  categories: categoriesReducer,
  tags: tagsReducer,
});

export default rootReducer;
