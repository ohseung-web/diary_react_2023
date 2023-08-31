import Button from '../componet/Button';
import Header from '../componet/Header';
import { useState, useContext, useEffect } from 'react';
import { DiaryStateContext } from '../App';
import { getMonthRangeByDate } from '../util';
import DiaryList from '../componet/DiaryList';

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const [fillterData, setFillterData] = useState([]);
  const headerTitle = `
     ${pivotDate.getFullYear()}년
     ${pivotDate.getMonth() + 1}월
  `;
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  //해당 월 작성일기 필터링
  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFillterData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      setFillterData([]);
    }
  }, [data, pivotDate]);
  return (
    <div>
      <Header
        title={headerTitle}
        leftchild={<Button text={'<'} onClick={onDecreaseMonth} />}
        rightchild={<Button text={'>'} onClick={onIncreaseMonth} />}
      />
      <DiaryList  data={fillterData} />
    </div>
  );
};

export default Home;
