import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface feedProps {
  posts: Post[];
}

export interface Post {
  created_at: string;
  description: string;
  total_comments: number;
  total_likes: number;
  liked_by_current_user: boolean;
  saved_by_current_user: boolean;
  image?: any;
  video?: any;
  id: string;
  user: {
    first_name: string;
    last_name: string;
    id: string;
    profile_picture: string;
  };
}

const initialState: feedProps = {
  posts: []
};

const counterSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    updateFeedInfo: (state, action: PayloadAction<feedProps>) => {
      console.log('--- Redux - Feed - Updated feed info ---');
      return {
        posts: action.payload
      } as never
    },
    pushPostIntoFeed: (state, action: PayloadAction<Post>) => {
      console.log('--- Redux - Feed - Pushed post into feed ---');
      return {
        ...state,
        arr: [...state.posts, action]
      };
    },
    clearFeedState: (state) => {
      state.posts = [];
    }
  }
});

export const { updateFeedInfo, clearFeedState, pushPostIntoFeed } = counterSlice.actions;

export const selectFeedInformation = (state: RootState) => state.feed;

export default counterSlice.reducer;
