import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import DocumentTitle from "react-document-title";

import { Button } from "@blueprintjs/core";

import { AlertCircle } from 'react-feather'

import {Link} from 'react-router-dom'

@inject('store')
@observer
class Home extends Component {


  render() {
    const main = <div>
      <div>
        <Link to="/">Home</Link> | &nbsp;
        <Link to="/login">Login</Link> | &nbsp;
        <Link to="/register">Register</Link> | &nbsp;
      </div>
      <Button onClick={() => { }} icon={<AlertCircle />} />
    </div>;

    return <DocumentTitle title={this.props.store.appname}>{main}</DocumentTitle>
  }
}

export default Home