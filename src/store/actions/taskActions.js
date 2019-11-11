import FirebaseUtils from "../../utils/FirebaseUtils";
import { setError, setLoading } from "./appActions";
import { CREATE_TASK_SUCCESSFUL, CREATE_TASK_FAILED } from "./types";
import TaskUtils from "../../utils/TaskUtils";

export const createTask = taskData => {
  console.log("new User is", taskData);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch(setLoading(true));

    const uid = getState().firebase.auth.uid;

    FirebaseUtils.createFireBaseTask(taskData, uid, getFirebase, getFirestore)
      .then(response => {
        dispatch(setLoading(false));
        dispatch({ type: CREATE_TASK_SUCCESSFUL });
        TaskUtils.setTaskCount();
      })
      .catch(error => {
        dispatch({ type: CREATE_TASK_FAILED });
        dispatch(setError(true));
        dispatch(setLoading(false));
      });
  };
};
