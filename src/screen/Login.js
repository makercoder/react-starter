import { inject, observer } from "mobx-react";
import React, {Component} from "react";
import DocumentTitle from "react-document-title";

@inject('store')
@observer
class Login extends Component
{


  render()
  {
    const main = <div>
      Hello World!!! Login
    </div>;

    return <DocumentTitle title={this.props.store.appname}>{main}</DocumentTitle>
  }
}

export default Login