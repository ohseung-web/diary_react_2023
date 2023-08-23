import React from 'react';
import '../style/EmotionItem.css';

const EmotionItem = ({ id, img, name, onClick, isSelected }) => {
  const handleOnClick = () => {
    onClick(id);
    console.log(id, name);
  };
  return (
    <div
      className={[
        'EmotionItem',
        isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`,
      ].join(' ')}
      onClick={handleOnClick}
    >
      <img src={img} alt={`emotion${id}`} />
      <span>{name}</span>
    </div>
  );
};

export default EmotionItem;
