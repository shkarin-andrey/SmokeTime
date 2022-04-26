import Image from "next/image";
import Link from "next/link";
import { Container } from "reactstrap";
import imgHaski from "../../public/img/haski.png";

const Brands = () => {
  console.log(imgHaski);
  return (
    <section className="brands">
      <Container>
        <h2 className="title">Ассортимент</h2>
        <div className="brands__cards">
          <div className="brands__card">
            <Link href="/shop/haski">
              <a>
                <img
                  className="brands__card-img"
                  src={
                    "https://image-component.nextjs.gallery/_next/image?url=%2Fmountains.jpg&w=750&q=75"
                  }
                  alt={"1"}
                ></img>
                <h3>Haski</h3>
              </a>
            </Link>
          </div>

          <div className="brands__card">
            <Link href="/shop/haski">
              <a>
                <div
                  className="brands__card-img"
                  style={{
                    background:
                      'url("https://image-component.nextjs.gallery/_next/image?url=%2Fmountains.jpg&w=750&q=75") center center no-repeat',
                  }}
                ></div>
                <h3>Haski</h3>
              </a>
            </Link>
          </div>
          <div className="brands__card">
            <Image src={imgHaski} alt="1" className="brands__card-img" />
            <h3>Haski</h3>
          </div>
          <div className="brands__card">
            <Image src={imgHaski} alt="1" className="brands__card-img" />
            <h3>Haski</h3>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Brands;
