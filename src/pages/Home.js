import Editor from '../componet/Editor';

const Home = () => {
  return(
    <div>
      <Editor onSubmit={() => {
         alert('작성완료 버튼 클릭함');
      }} />
    </div>
  )
}

export default Home;
