import React from 'react';

// Создает список, с заголовком и ссылкой, если приходят соответствующие параметры
class List extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='list-inner'>
        {this.props.title && this.props.link
          ? <a href={this.props.link}>{this.props.title}</a>
          : this.props.title}
        <ul className={this.props.className}>{this.props.children}</ul>
      </div>
    )
  }
}


export default List