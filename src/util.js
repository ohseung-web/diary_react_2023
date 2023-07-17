// 이미지 import.js
import emotion1 from './img/emoji_frowning.png';
import emotion2 from './img/emoji_neutral.png';
import emotion3 from './img/emoji_pouting.png';
import emotion4 from './img/emoji_slightly.png';
import emotion5 from './img/emoji_smiling.png';

export const getEmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case '1':
      return emotion1;
    case '2':
      return emotion2;
    case '3':
      return emotion3;
    case '4':
      return emotion4;
    case '5':
      return emotion5;
    default:
      return null;
  }
};

function Util() {
  return (
    <>
      <img src={getEmotionImgById(1)} alt="" />
      <img src={getEmotionImgById(2)} alt="" />
      <img src={getEmotionImgById(3)} alt="" />
      <img src={getEmotionImgById(4)} alt="" />
      <img src={getEmotionImgById(5)} alt="" />
    </>
  );
}

export default Util;
