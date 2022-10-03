import { createSlice } from '@reduxjs/toolkit';
import { ICategory, IPost, ITag } from '../../../solutions/models/postModels';
import { postActionsAsync } from './postActionsAsync';

export interface PostState {
  tags: ITag[];
  categories: ICategory[];
  selectedPost: IPost;
  myPosts: IPost[];
}

const initialState: PostState = {
  tags: [],
  categories: [],
  selectedPost: null,
  myPosts: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postActionsAsync.getTagsAsync.fulfilled, (state, action) => {
      state.tags = action.payload;
    });
    builder.addCase(postActionsAsync.getCategoriesAsync.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(postActionsAsync.getPostByIdAsync.fulfilled, (state, action) => {
      state.selectedPost = action.payload;
    });
    builder.addCase(postActionsAsync.getPostsByUserIdAsync.fulfilled, (state, action) => {
      state.myPosts = action.payload;
    });
  },
});

export default postSlice;