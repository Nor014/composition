import React from 'react';

// Создает блок рекламы, img или img + props
class Add extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      <a href = {this.props.link} className={this.props.className}>

        {this.props.img && <img src={this.props.img} alt="" className='add__img' />}
        {this.props.children && <div className='add__body'>{this.props.children}  </div>}

      </a>
    )
  }
}


export default Add