// 기본버튼 default
// 긍정버튼 positive
// 부정버튼 negative
import '../style/Button.css';

const Button = ({ text, type, onClick }) => {
  const btnType = ['positive', 'negative'].includes(type) ? type : 'default';
  return (
    <button className={['Button', `_${btnType}`].join('')} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
