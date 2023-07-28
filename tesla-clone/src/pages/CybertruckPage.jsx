import ImageBackgroundSection from '../components/imagebackgroudsection/ImageBackgroundSection';
import cybertruck from '../assets/cybertruck.jpeg';
import modcyber from '../assets/pexels-screen-post-10029877.jpg';
import ImageBackgroundNoText from '../components/ImageBackgroundNoText/ImageBackgroundNoText';



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
  }
];

export default function CyberTruckPage() {
  return (
    <div className="container">
      <section className="section">
        <ImageBackgroundSection
          header="Cybertruck"
          description="View inventory"
          backgroundImage={cybertruck}
          featureItems={featureItems}
        />
      </section>
     
        <section className="section">
          <ImageBackgroundNoText backgroundImage={modcyber} />
        </section>
      
    </div>
  );
}
