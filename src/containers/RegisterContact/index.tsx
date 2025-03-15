import { Navigate } from "react-router-dom";
import { showAlertSucessRegister } from "../../components/CustomAlert";
import { register } from "../../store/reducers/contact";
import * as S from "./styles";
import React, { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  // Função para formatar o número de telefone
  const formatarTelefone = (value: string): string => {
    value = value.replace(/\D/g, ""); // Remove tudo que não for número
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2"); // Adiciona parênteses no DDD
    value = value.replace(/(\d{5})(\d)/, "$1-$2"); // Adiciona o traço no número
    return value.substring(0, 15); // Limita o tamanho máximo
  };

  // Estados para armazenar os valores do formulário
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  // Função para lidar com a mudança no campo telefone
  const handleChangeTelefone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(formatarTelefone(event.target.value));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    // Verifica se todos os campos foram preenchidos
    if (telefone.length === 0 || nome.length === 0 || email.length === 0) {
      console.error("Erro: Todos os campos devem ser preenchidos!");
      return; // Se algum campo estiver vazio, não envia os dados
    }

    // Dados a serem enviados
    const contactData = { name: nome, phone: telefone, email: email };

    console.log("Dados enviados:", contactData);

    // Chama a ação de registro no Redux
    dispatch(register(contactData));

    // Exibe o alerta de sucesso
    showAlertSucessRegister();

    // Limpa os campos após o envio
    setNome("");
    setTelefone("");
    setEmail("");

    navigate('/')
  };

  return (
    <>
      <S.Title>Cadastro de Contato</S.Title>

      <S.Form onSubmit={handleSubmit}>
        <S.Label htmlFor="nome">Nome:</S.Label>
        <S.Input 
          required
          type="text" 
          id="nome" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
        />

        <S.Label htmlFor="numero">Número:</S.Label>
        <S.Input
          required
          type="text"
          id="numero"
          value={telefone}
          onChange={handleChangeTelefone}
          placeholder="(99) 99999-9999"
          maxLength={15}
        />

        <S.Label htmlFor="email">Email:</S.Label>
        <S.Input
          required 
          type="text" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />

        <S.MenuButton type="submit">Cadastrar</S.MenuButton>
      </S.Form>
    </>
  );
};

export default Contact;
