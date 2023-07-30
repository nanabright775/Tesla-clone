import './ImageGrid.css';

export default function ImageGrid({ image1, image2, text1, text2 }) {
  return (

    <div className="grid-container">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={image1}
          alt="1mage 1"
          style={{ width: '400px', height: '300px', marginRight: '10px' }}
        />
        <span >{text1}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <span style={{ display: 'flex' }}>{text2}</span>
        <img
          src={image2}
          alt="1mage 2"
          style={{ width: '400px', height: '300px', marginLeft: '10px' }}
        />
      </div>
    </div>
  );
}
