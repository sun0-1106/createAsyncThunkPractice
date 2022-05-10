import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

//createAsyncThunk를 공부하면서 하고싶었는데 여러번 요청하는 api가 아니다 보니까
//해당 과제에서는 쓸 일이 없음. parameter에 들어올 값이 변하는 검색기능같은거 쓸때 사용해보자
export const searchResultRequest = createAsyncThunk(
  'request',
  async (any?: string) => {
    try {
      const cacheCheck = localStorage.getItem('data');
      const res = await axios.get('https://picsum.photos/v2/list');
      if (cacheCheck) {
        //데이터가 이미 저장되어 있다면
        console.log('저장되어있음');
        return cacheCheck;
      } else {
        console.log('저장 안됌');
        let data = res.data;
        localStorage.setItem('data', data);
      }
    } catch (err) {
      console.log(err);
    }
  },
);

interface initial {
  isLoading: boolean;
  data: Array<any>;
}

const initialState: initial = {
  isLoading: false,
  data: [],
};

// interface parsed {
//   config?: object;
//   data?: Array<any>;
//   headers?: object;
//   request?: object;
// }

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      searchResultRequest.fulfilled,
      (state: initial, { payload }) => {
        console.log('켜짐');
        const parsedObj = JSON.parse(payload!);
        state.data = parsedObj.data!;
      },
    );
  },
});

export default resultSlice.reducer;
