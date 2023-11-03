import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { userProps } from '@/types/userTypes';

export type RegistrationFields = 'first_name' | 'last_name' | 'qualifications';

export interface updateFieldProps {
  field: RegistrationFields;
  value: any;
}

const initialState: userProps = {
  id: '',
  first_name: '',
  last_name: '',
  salutation: '',
  profile_picture: '',
  cover_picture: '',
  email: '',
  gender: ''
};

const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserInfo: (state, action: PayloadAction<userProps>) => {
      console.log('--- Redux - User - Updated entire user info ---');
      return {
        ...state,
        ...action.payload
      };
    },
    updateSingleUserInfo: (state, action: PayloadAction<updateFieldProps>) => {
      console.log('--- Redux - User - Updated item in user info ---');
      const { field, value } = action.payload;
      state[field] = value as never;
    },
    clearUserRegistrationInfo: (state) => {
      state.first_name = '';
      state.last_name = '';
    }
  }
});

export const { updateSingleUserInfo, updateUserInfo, clearUserRegistrationInfo } =
  counterSlice.actions;

export const selectUserInformation = (state: RootState) => state.user;

export default counterSlice.reducer;
