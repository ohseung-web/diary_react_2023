import { useNavigate } from 'react-router-dom';
import '../style/DiaryList.css';
import Button from './Button';
import { useState } from 'react';

const sortOptonList = [
  { value: 'latest', name: '최신순' },
  { value: 'oldest', name: '오래된 순' },
];

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState('latest');
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };
  const navigate = useNavigate();
  const onClickNew = () => {
    navigate('/new');
  };
  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select>
            {sortOptonList.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </select>
        </div>
        <div className="right_col">
          <Button
            onClick={onClickNew}
            type={'positive'}
            text={'새 일기 쓰기'}
          />
        </div>
      </div>
    </div>
  );
};

export default DiaryList;
