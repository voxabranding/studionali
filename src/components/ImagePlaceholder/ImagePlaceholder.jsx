import React from 'react';
import './ImagePlaceholder.css';

export default function ImagePlaceholder({ 
  text = 'Espaço para Imagem/Vídeo', 
  bgColor = '#E8E3DA',
  className = '',
  style = {}
}) {
  return (
    <div 
      className={`image-placeholder ${className}`}
      style={{ backgroundColor: bgColor, ...style }}
    >
      <span className="image-placeholder__text">{text}</span>
    </div>
  );
}
