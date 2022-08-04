import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const { personalInfo, workInfo } = this.props;
    // Recupere as informações do seu estado criado no Redux
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {personalInfo.nome}
        </div>
        <div>
          Email:
          { personalInfo.email }
        </div>
        <div>
          CPF:
          { personalInfo.cpf }
        </div>
        <div>
          Endereço:
          { personalInfo.endereco }
        </div>
        <div>
          Cidade:
          { personalInfo.cidade }
        </div>
        <div>
          Estado:
          { personalInfo.estado }
        </div>
        <div>
          Currículo:
          { workInfo.curriculo }
        </div>
        <div>
          Cargo:
          { workInfo.cargo }
        </div>
        <div>
          Descrição do cargo:
          { workInfo.descricao }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  personalInfo: state.personalInfo,
  workInfo: state.workInfo,
});

FormDataDisplay.propTypes = {
  personalInfo: PropTypes.objectOf(PropTypes.object).isRequired,
  workInfo: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(FormDataDisplay);
