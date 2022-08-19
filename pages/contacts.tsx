import MainLayout from "../layout";
import ContactsInfo from "../Screens/ContactsInfo";
import QuestionsLeft from "../Screens/QuestionsLeft";

const Contacts = () => {
  const title = `Контактная информация оптового магазина жидкостей для вейпа`;
  const description =
    "Магазин жидкостей для вейпа (электронных сигарет) находится по адресу г. Самара, ул.Гастелло 49. Режим работы: Пн-Пт с 9:00 по 18:00 по МСК. Успей купить новую жижу!";

  return (
    <MainLayout title={title} description={description}>
      <h1 className="big-title">Контакты</h1>
      <ContactsInfo />
      <QuestionsLeft />
    </MainLayout>
  );
};

export default Contacts;
