import AboutCompany from "../components/AboutCompany/AboutCompany";
import MainLayout from "../layout";
import QuestionsLeft from "../Screens/QuestionsLeft";

const About = () => {
  return (
    <MainLayout>
      <h1 className="big-title">О компании SMOKE TIME</h1>
      <AboutCompany />
      <QuestionsLeft />
    </MainLayout>
  );
};

export default About;
