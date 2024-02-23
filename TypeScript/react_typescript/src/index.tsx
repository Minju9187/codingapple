import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

// React에서 Redux 쓰는 이유
// 모든 컴포넌트가 state 공유 가능
// 수정방법을 파일 한 곳에 정의해둠

const 초기값 = { count: 0, user: "kim" };

const counterSlice = createSlice({
  name: "counter",
  initialState: 초기값,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    incrementByAmount(state, action: any) {
      state.count += action.payload;
    },
  },
});

let store = configureStore({
  reducer: {
    counter1: counterSlice.reducer,
  },
});

//state 타입을 export 해두는건데 나중에 쓸 데가 있음
export type RootState = ReturnType<typeof store.getState>;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
