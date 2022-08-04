import React from "react";
import { connect } from "react-redux";

class Info extends React.Component {
    render() {
      const { info } = this.props;
        return (
          <>
            <h1>{info.name}</h1>
            <h1>{info.email}</h1>
            <h1>{info.password}</h1>
          </>
        )
    }
}

const mapStateToProps = (state) => ({
  info: state.myReducer.info,
});

export default connect(mapStateToProps, null)(Info);