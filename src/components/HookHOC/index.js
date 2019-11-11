import React from "react";

import HookUtils from "../../utils/HookUtils";

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const [values, handleChange] = HookUtils.useForm();

    return <Component {...props} values={values} handleChange={handleChange} />;
  };
}

export default withMyHook;
