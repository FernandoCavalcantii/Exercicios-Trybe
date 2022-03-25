import React from "react";

class Cpf extends React.Component {
    render() {
        const { handleChange, value } = this.props;
        return (
            <label>CPF
                <input
                type="text"
                name="cpf"
                onChange={handleChange}
                value={value}
                >
                </input>
            </label>
        )
    }
}

export default Cpf