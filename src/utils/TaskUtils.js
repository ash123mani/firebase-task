import DateUtils from './DateUtils'

const todaysDate = DateUtils.todaysFullDate()

export default {

  setTaskCount() {
    let taskCount = this.getTaskCount()
    if(taskCount <= 3) {
      localStorage.setItem(`${todaysDate}`, taskCount+1)
    }
  },

  getTaskCount() {
    if(localStorage.getItem(`${todaysDate}`)){
      return Number(localStorage.getItem(`${todaysDate}`))
    }
    return 0;
  }
}