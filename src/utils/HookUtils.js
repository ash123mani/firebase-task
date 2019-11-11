import { useState } from "react";

export default {
  useForm() {
    const [value, setValue] = useState({});

    const handleChange = event => {
      const {
        target: { name, value }
      } = event;
      event.persist();
      setValue(state => ({ ...state, [name]: value }));
    };

    return [value, handleChange];
  }
};
