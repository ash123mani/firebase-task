import { connect } from "react-redux";

import CreateTaskScreen from "../../components/CreateTaskScreen";
import { createTask } from "../../store/actions/taskActions";

const mapDispatchToProps = dispatch => {
  return {
    createTask: taskData => dispatch(createTask(taskData))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateTaskScreen);
