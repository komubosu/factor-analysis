import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface faCreateState {
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
  newStudent: {
    [key: string]:
      | string
      | Array<{
          title: string;
          answer: string;
        }>;
    name: string;
    class: string;
    school: string;
    age: string;
    questions: Array<{
      title: string;
      answer: string;
    }>;
  };
  isNewStudent: boolean;
}

const initialState: faCreateState = {
  title: '',
  students: [],
  newStudent: {
    name: '',
    class: '',
    school: '',
    age: '',
    questions: [
      { title: 'Вопрос №1', answer: '' },
      { title: 'Вопрос №2', answer: '' },
      { title: 'Вопрос №3', answer: '' },
      { title: 'Вопрос №4', answer: '' },
      { title: 'Вопрос №5', answer: '' },
      { title: 'Вопрос №6', answer: '' },
      { title: 'Вопрос №7', answer: '' },
    ],
  },
  isNewStudent: false,
};

export const faCreateSlice = createSlice({
  name: 'faCreate',
  initialState,
  reducers: {
    changeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    changeStudentInfo: (
      state,
      action: PayloadAction<{ key: string; value: string }>
    ) => {
      const { key, value } = action.payload;
      state.newStudent[key] = value;
    },
    changeStudentAnswer: (
      state,
      action: PayloadAction<{ index: number; value: string }>
    ) => {
      const { index, value } = action.payload;
      state.newStudent.questions[index].answer = value;
    },
    openStudent: (state, action: PayloadAction<number>) => {
      state.newStudent = state.students[action.payload];
    },
    deleteStudent: (state, action: PayloadAction<number>) => {
      state.students = state.students.filter(
        student => student !== state.students[action.payload]
      );
    },
    resetNewStudent: state => {
      state.newStudent = initialState.newStudent;
    },
    changeNewStudentStatus: state => {
      state.isNewStudent = !state.isNewStudent;
    },
    addNewStudent: state => {
      state.students = [...state.students, state.newStudent];
    },
    resetState: () => {
      return initialState;
    },
  },
});

export const {
  changeTitle,
  changeStudentInfo,
  changeStudentAnswer,
  openStudent,
  deleteStudent,
  resetNewStudent,
  changeNewStudentStatus,
  addNewStudent,
  resetState,
} = faCreateSlice.actions;

export default faCreateSlice.reducer;
