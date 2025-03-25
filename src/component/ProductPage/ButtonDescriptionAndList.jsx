import React from 'react'
import ButtonTitle from './ButtonTitle';

const ButtonDescriptionAndList = ({ title, paragraphs = [], listItems = [] }) => {
    return (
      <div className='mt-14'>
        {title && <ButtonTitle title={title} />}
        
        {/* Render paragraphs dynamically */}
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="ms-6 text-[#FFFFFFCC] mt-7">
            {paragraph}
          </p>   
        ))}
  
        {/* Render list if items are passed */}
        {listItems.length > 0 && (
          <ul className="text-[#FFFFFFCC] list-disc ms-12 mt-4">
            {listItems.map((item, index) => (
              <li key={index} className="mt-2">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

export default ButtonDescriptionAndList