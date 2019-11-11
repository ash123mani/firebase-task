import React from 'react'
import BaseInput from './styles'


// const Input = () => (
//   <BaseInput name={name} value={value} type={type} onChange={onChange} {...rest} />
// )

class Input extends React.Component {
  
  componentDidMount() {
    console.log('refs are', this.refs)
    for(let x in this.refs) {
      console.log('x is', x)
      this.refs[x].onkeypress = (e) => 
        this._handleKeyPress(e, this.refs[x], x);
    }
    // this.refs.props.name.focus();
  }

  _handleKeyPress(e, field, name){
    console.log('Enter holaa')

    if(e.keyCode === 13) {
      console.log('Enter pReadsse')
      e.preventDefault();
      let next  = this.refs[name].nextSibling;
      if(next) {
        this.refs[name].nextSibling.focus()
      }
    }
  }
  
  render() {
    const { name, type, value, onChange, ...rest } = this.props
    return (
      <BaseInput name={name} value={value} type={type} onChange={onChange} {...rest} />
    )
  }
}

export default Input