import './ImageGrid.css';

export default function ImageGrid({ image1, image2, text1, text2 }) {
  return (
    <div className="grid-container">
      <div
        className="grid-item image-grid-img"
        style={{ backgroundImage: `url(${image1})` }}
      ><img src={image1} alt="" /></div>
      <div className="grid-item">{text1}</div>
      <div className="grid-item">{text2}</div>

      <div
        className="grid-item image-grid-img"
        style={{ backgroundImage: `url(${image2})` }}
      ><img src={image2} alt="" /></div>
    </div>
  );
}
