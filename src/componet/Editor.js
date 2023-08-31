import Button from './Button';
import '../style/Editor.css';
import { useEffect, useState } from 'react';
import { emotionList, getFormattedDate } from '../util';
import { useNavigate } from 'react-router-dom';
import EmotionItem from './EmotionItem';

const Editor = ({ initData, onSubmit }) => {
  // 취소하기(뒤로)
  const navigate = useNavigate(); //특정경로 이동('./paht')
  const handleOnGoBack = () => {
    navigate(-1);
  };
  const [state, setState] = useState({
    // useState를 호출해 새로운 state를 만든다.
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: '',
  });
  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };
  // 일기 함수
  const handlechangContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };
  // 작성 완료 버튼함수
  const handleSubmit = () => {
    onSubmit(state);
  };
  // 감정이미지 함수
  const handleChangeEmotion = (emotionId) => {
    setState({
      ...state,
      emotionId,
    });
  };
  //기본값 (일기내용) 설정
  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date))),
      });
    }
  }, [initData]);
  return (
    <div className="Editor">
      <div className="editor_section">
        {/* 날짜 */}
        <h4>오늘의 날짜</h4>
        <div className="input_wrapper">
          <input type="Date" value={state.date} onChange={handleChangeDate} />
        </div>
      </div>
      <div className="editor_section">
        {/* 감정 */}
        <h4>오늘의 감정</h4>
        <div className="input_wrapper emotion_list_wrapper">
          {emotionList.map((it) => (
            // ...map() => (return이 없을때 사용)
            <EmotionItem
              key={it.id}
              {...it}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === it.id}
            />
          ))}
        </div>
      </div>
      <div className="editor_section">
        {/* 일기 */}
        <h4>오늘의 일기</h4>
        <div className="input_wrapper">
          <textarea
            placeholder="오늘은 어땠나요?"
            value={state.content}
            onChange={handlechangContent}
          ></textarea>
        </div>
      </div>
      <div className="editor_section bottom_section">
        {/* 취소하기, 작성완료 */}
        <Button text={'취소하기'} onClick={handleOnGoBack} />
        <Button text={'작성 완료'} type={'positive'} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Editor;
