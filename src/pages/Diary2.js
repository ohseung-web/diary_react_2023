import { useParams } from 'react-router-dom';

const Diary2 = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
       <div>{id}번 일기</div>
       <div>Diray</div>
    </>
  
  );
};

export default Diary2;
