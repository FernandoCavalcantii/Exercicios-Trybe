import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends React.Component {
    render() {
        return <div>
            {conteudos.map(el => {
                return <ul className="ul">
                    <li>O conteúdo é: {el.conteudo}</li>
                    <li>Status: {el.status}</li>
                    <li>Bloco: {el.bloco}</li>
                </ul>
            })}
        </div>
    }
}

export default Content