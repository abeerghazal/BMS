import { Carousel, Anchor } from 'antd';

import staticData from '../../StaticData';
import './style.css';

const { Link } = Anchor;

const HomeSection: React.FC = () => (
  <div id="home" className="heroBlock">
    <div className="overlay">
      <Carousel>
        {staticData.items.map((item: { key: number; title: string; content: string }) => (
          <div key={item.key} className="container-fluid">
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <div className="btnHolder">
                <Anchor targetOffset={65} className="btnHolder">
                  <Link key="about-us" href="#about-us" title="المزيد عنا">
                    <i className="ri-slideshow-3-line" />
                  </Link>
                  <Link key="video" href="#video" title="شاهدنا">
                    <i className="ri-slideshow-3-line" />
                  </Link>
                </Anchor>

              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);

export default HomeSection;
