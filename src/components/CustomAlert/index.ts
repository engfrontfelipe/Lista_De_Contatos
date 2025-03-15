import Swal from "sweetalert2";

export const showAlertSucessDelete = () => {
    Swal.fire({
      title: "Sucesso!",
      text: "Contato excluído com sucesso!",
      icon: "success",
      confirmButtonText: "OK",
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000, 
      background: "#1f1f20",
      color: "#dce0e6"
      
    });
};

  export const showAlertSucessRegister = () => {
    Swal.fire({
      title: "Sucesso!",
      text: "Contato criado com sucesso!",
      icon: "success",
      confirmButtonText: "OK",
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000, 
      background: "#1f1f20",
      color: "#dce0e6"
      
    });
  };

  export const showAlertSucessEdit = () => {
    Swal.fire({
      title: "Sucesso!",
      text: "Contato atualizado com sucesso!",
      icon: "success",
      confirmButtonText: "OK",
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000, 
      background: "#1f1f20",
      color: "#dce0e6"
      
    });
  };