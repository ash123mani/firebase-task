export default {

  todaysFullDate() {
    const date = new Date();
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    const fullDate = `${day}-${month}-${year}`

    return fullDate
  }
  
}