import Image from "next/image";
import { Col, Container, Row } from "reactstrap";
import img from "../../public/img/main-img.png";

const AboutCompany = () => {
  return (
    <section className="about_company">
      <Container>
        <Row className="mt-5">
          <Col md={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              odio blandit scelerisque enim sed pulvinar proin mi nibh. Arcu
              diam molestie integer felis aliquam tempor, nullam. Non sed urna
              porttitor sodales in sit odio sagittis facilisi. Adipiscing eros
              platea parturient eu odio pellentesque in. Malesuada magna sed
              nunc turpis faucibus pretium sit est. Nibh sit sit et felis leo,
              at amet, mauris felis.
            </p>
            <p>
              Viverra nisi, ante ultricies tempor. Maecenas odio ultrices id
              vitae amet tortor diam. Tincidunt augue mauris magna tincidunt
              eget sed diam enim. Turpis convallis pretium lectus mi. Viverra
              ullamcorper risus quis adipiscing enim pretium amet. Sodales
              adipiscing nunc vel sit arcu volutpat. Odio sagittis arcu magna id
              viverra. Lacinia integer at enim in dolor elit vulputate velit
              sed. At risus id consequat sem diam, nec nunc elit amet. Lobortis
              aliquet nunc vestibulum platea ut amet ut laoreet. Dis pretium
              tellus orci phasellus vel amet adipiscing senectus ut. Nisl,
              aliquam mi eu morbi lacinia a, pharetra pulvinar.
            </p>
          </Col>
          <Col md={6}>
            <Image src={img} alt="О компании SMOKE TIME" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutCompany;
