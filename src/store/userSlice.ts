import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  isLoggin: boolean;
  fas: Array<{
    title: string;
    students: Array<{
      name: string;
      class: string;
      school: string;
      age: string;
      questions: Array<{
        title: string;
        answer: string;
      }>;
    }>;
  }>;
  openedFa: {
    title: string;
    students: Array<{
      name: string;
      class: string;
      school: string;
      age: string;
      questions: Array<{
        title: string;
        answer: string;
      }>;
    }>;
  };
}

const initialState: UserState = {
  isLoggin: false,
  fas: [],
  openedFa: { title: '', students: [] },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeLogginStatus: state => {
      state.isLoggin = !state.isLoggin;
    },
    addFa: (
      state,
      action: PayloadAction<{
        title: string;
        students: Array<{
          name: string;
          class: string;
          school: string;
          age: string;
          questions: Array<{
            title: string;
            answer: string;
          }>;
        }>;
      }>
    ) => {
      state.fas = [...state.fas, action.payload];
    },
    openFa: (state, action: PayloadAction<number>) => {
      state.openedFa = state.fas[action.payload];
    },
  },
});

export const { changeLogginStatus, addFa, openFa } = userSlice.actions;

export default userSlice.reducer;
