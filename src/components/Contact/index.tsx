import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "../../store/reducers/contact";
import { RootState } from "../../store/index";
import {
  Table,
  Td,
  Th,
  Tr,
  MenuContainer,
  MenuButton,
  DropdownMenu,
  MenuItem,
  ModalOverlay,
  ModalContent,
  CloseButton,
  SaveButton,
  Input,
} from "./styles";

interface Contact {
  id: number;
  name: string;
  phone: number; 
  city: string;
}

const Contact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contact);

  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editContact, setEditContact] = useState<Contact | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!(event.target as HTMLElement).closest(".menu-container")) {
        setOpenMenuId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEdit = (contact: Contact) => {
    setEditContact({ ...contact });
    setModalOpen(true);
    setOpenMenuId(null); 
  };

  const handleSave = () => {  
    if (editContact) {
      dispatch(edit(editContact));
      setModalOpen(false);
    }
  };

  return (
    <>
      <Table>
        <Tr>
          <Th>Nome</Th>
          <Th>Telefone</Th>
          <Th>Cidade</Th>
          <Th>Ação</Th>
        </Tr>

        {contacts.map((contact) => (
          <Tr key={contact.id}>
            <Td>{contact.name}</Td>
            <Td>{contact.phone}</Td>
            <Td>{contact.city}</Td>
            <Td>
              <MenuContainer className="menu-container">
                <MenuButton
                  onClick={() => {
                    setOpenMenuId(openMenuId == contact.id ? null : contact.id);
                  }}
                >
                  Ações
                </MenuButton>
                {openMenuId === contact.id && (
                  <DropdownMenu>
                    <MenuItem onClick={() => handleEdit(contact)}>Editar</MenuItem>
                    <MenuItem onClick={() => alert("Excluir")}>Excluir</MenuItem>
                  </DropdownMenu>
                )}
              </MenuContainer>
            </Td>
          </Tr>
        ))}
      </Table>

      {modalOpen && editContact && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setModalOpen(false)}>X</CloseButton>
            <h2>Editar Contato</h2>
            <Input 
              type="text" 
              value={editContact.name} 
              onChange={(e) => setEditContact({ ...editContact, name: e.target.value })} 
            />
            <Input 
              type="number" 
              value={editContact.phone} 
              onChange={(e) => setEditContact({ ...editContact, phone: Number(e.target.value) })} 
            />
            <Input 
              type="text" 
              value={editContact.city} 
              onChange={(e) => setEditContact({ ...editContact, city: e.target.value })} 
            />
            <SaveButton onClick={handleSave}>Salvar</SaveButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Contact;
