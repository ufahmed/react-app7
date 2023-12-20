import React, { useState } from 'react';

const BoxGenerator = () => {
  const [color, setColor] = useState('');
  const [dimensions, setDimensions] = useState({ height: '', width: '' });
  const [boxes, setBoxes] = useState([]);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleDimensionChange = (e) => {
    const { name, value } = e.target;
    setDimensions({
      ...dimensions,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBox = {
      color,
      height: dimensions.height + 'px',
      width: dimensions.width + 'px',
    };
    setBoxes([...boxes, newBox]);
    setColor(''); // Clear color input after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="colorInput">Color:</label>
        <input
          type="text"
          id="colorInput"
          value={color}
          onChange={handleColorChange}
        />
        <label htmlFor="heightInput">Height (px):</label>
        <input
          type="number"
          id="heightInput"
          name="height"
          value={dimensions.height}
          onChange={handleDimensionChange}
        />
        <label htmlFor="widthInput">Width (px):</label>
        <input
          type="number"
          id="widthInput"
          name="width"
          value={dimensions.width}
          onChange={handleDimensionChange}
        />
        <button type="submit">Add Box</button>
      </form>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {boxes.map((box, index) => (
          <div
            key={index}
            style={{
              backgroundColor: box.color,
              height: box.height,
              width: box.width,
              margin: '5px',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BoxGenerator;