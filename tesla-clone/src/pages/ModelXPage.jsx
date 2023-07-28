import ImageBackgroundSection from '../components/imagebackgroudsection/ImageBackgroundSection';
import modelx from '..//assets/model-x.jpeg'
import ImageBackgroundNoText from '../components/ImageBackgroundNoText/ImageBackgroundNoText';
import modelss from '../assets/pexels-pixabay-258083.jpg';


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


export default function ModelXPage() {
  return (
    <div className="container">
      <section className="section">
        <ImageBackgroundSection
          header="Model X"
          description="View inventory"
          backgroundImage={modelx}
          featureItems={featureItems}
        />
      </section>
      <section className="section">
        <ImageBackgroundNoText backgroundImage={modelss} />
      </section>
    </div>
  );
}
