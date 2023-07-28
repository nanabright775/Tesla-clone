import ImageBackgroundSection from '../components/imagebackgroudsection/ImageBackgroundSection';
import models from '../assets/modelx.jpeg';
import modelss from '../assets/modeld.jpeg';
import ImageBackgroundNoText from '../components/ImageBackgroundNoText/ImageBackgroundNoText';
import ImageGrid from '../components/ImageGrid/ImageGrid';

const featureItems = [
  {
    title: '2.3s 0-60',
    description: 'very fast',
  },
  {
    title: '2.3s 0-60',
    description: 'very fast',
  },
  {
    title: '2.3s 0-60',
    description: 'very fast',
  },
  {
    title: '2.3s 0-60',
    description: 'very fast',
  },
];

export default function ModelSPage() {
  return (
    <div className="container">
      <section className="section">
        <ImageBackgroundSection
          header="Model S"
          description="View inventory"
          backgroundImage={models}
          featureItems={featureItems}
        />
      </section>
      <section className="section">
        <ImageBackgroundNoText backgroundImage={modelss} />
      </section>
      <section className="section">
        <ImageGrid
          image1={models}
          image2={modelss}
          text1="Glass Roof
              The expansive Glass Roof in Model 3 provides passengers 
              with a brighter, more spacious experience—and a
              seamless view of the sky.s"
          text2="All-Weather Comfort
              Enhance comfort and convenience with heated seats,
              side mirrors and steering wheel."  
        />
      </section>
    </div>
  );
}
