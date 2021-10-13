import React from "react";
import Header from "../../components/Header/Header";

const AdminHomePage = () => {
  return (
    <div>
      <Header />

      <div>
        <p>Criar Viagem</p>

        <div>
          <input type="text" placeholder="Nome" />
        </div>

        <div>
          <select>
            <option>Text</option>
            <option>Text</option>
            <option>Text</option>
          </select>
        </div>

        <div>
          <input type="date" />
        </div>

        <div>
          <input type="text" placeholder="Descrição" />
        </div>

        <div>
          <input type="number" placeholder="Duração em dias" />
        </div>

        <div>
          <button>Criar</button>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
