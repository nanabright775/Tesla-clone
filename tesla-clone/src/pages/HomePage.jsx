import HomeSectionVideo from '../components/homesectionvideo/HomeSectionVideo';
import ImageBackgroundSection from '../components/imagebackgroudsection/ImageBackgroundSection';
import models from '../assets/models.jpeg';
import modelx from '../assets/model-x.jpeg';
import cybertruck from '../assets/cybertruck.jpeg';

export default function HomePage() {
  return (
    <div className="container">
      <section className="section">
        <HomeSectionVideo />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Model S"
          description="View inventory"
          backgroundImage={models}
        />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Model X"
          description="View inventory"
          backgroundImage={modelx}
        />
      </section>
      <section className="section">
        <ImageBackgroundSection
          header="Cybertruck"
          description="View inventory"
          backgroundImage={cybertruck}
        />
      </section>
    </div>
  );
}
