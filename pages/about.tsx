import AboutCompany from "../components/AboutCompany/AboutCompany";
import MainLayout from "../layout";
import QuestionsLeft from "../Screens/QuestionsLeft";

const About = () => {
  const title = `Оптовая компания жидкостей для вейпа (Электронных сигарет)`;
  const description = `Интернет-магазин SmokeTimeOpt предлагает купить жидкости для вейпа (электронных сигарет) по низким ценам. Доставка по всей России почтовыми компаниями СДЭК и ПоытаРоссии`;

  return (
    <MainLayout title={title} description={description}>
      <h1 className="big-title">О компании SmokeTimeOpt</h1>
      <AboutCompany />
      <QuestionsLeft />
    </MainLayout>
  );
};

export default About;
