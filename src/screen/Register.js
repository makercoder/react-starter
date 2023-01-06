import { inject, observer } from "mobx-react";
import React, {Component} from "react";
import DocumentTitle from "react-document-title";

@inject('store')
@observer
class Register extends Component
{


  render()
  {
    const main = <div>
      Hello World!!! Register
    </div>;

    return <DocumentTitle title={this.props.store.appname}>{main}</DocumentTitle>
  }
}

export default Register