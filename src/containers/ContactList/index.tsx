import ButtonAdd from "../../components/ButtonAdd";
import Contact from "../../components/Contact";
import { Title } from "./styles";

const ContactList = () => {
  return (
    <>
      <Title>Lista de Contatos</Title>
      <Contact />
      <ButtonAdd />
    </>
  );
};

export default ContactList;
