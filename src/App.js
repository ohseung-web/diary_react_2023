import './style/diary.css';
import Home from './pages/Home';
import New from './pages/New';
// import diary from './pages/diary';
import Edit from './pages/Edit';
import Diary2 from './pages/Diary2';
import './style/index.css';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useReducer, useRef, useEffect, useState } from 'react';

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function reducer(state, action) {
  //dispatch type에 따라 다른 switch 인식
  switch (action.type) {
    case 'CREATE': {
      return [action.data, ...state];
    }
    case 'UPDATE': {
      return state.map((it) =>
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      );
    }
    case 'DELETE': {
      return state.filter((it) => String(it.id) !== String(action.targetId));
    }
    case 'INIT': {
      return action.data;
    }
    default: {
      return state;
    }
  }
}

//목 데이터 만들기
const mockData = [
  {
    id: 'mock1',
    data: new Date().getTime(),
    content: 'mock1',
    emotionId: 1,
  },
  {
    id: 'mock2',
    data: new Date().getTime(),
    content: 'mock2',
    emotionId: 2,
  },
  {
    id: 'mock3',
    data: new Date().getTime(),
    content: 'mock3',
    emotionId: 3,
  },
];

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  //목 데이터 업데이트 함수
  useEffect(() => {
    dispatch({
      type: 'INIT',
      data: mockData,
    });
    setIsDataLoaded(true);
    console.log('로딩완료');
  }, []);
  // create 생성
  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  };
  //update
  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: 'UPDATE',
      date: {
        id: targetId,
        date: new Date(date).getTime,
        content,
        emotionId,
      },
    });
  };
  //delete
  const onDelete = (targetId) => {
    dispatch({
      type: 'DELETE',
      targetId,
    });
  };

  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다.</div>;
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary2/:id" element={<Diary2 />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Routes>
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
}

export default App;
