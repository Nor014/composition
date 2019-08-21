import React from 'react';

// Создает элемент списка с настраиваемым классом, картинкой, ссылкой в зависимости от props
class ListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const base = {
      className: 'list-item',
      link: false
    }

    let newProps = Object.assign({}, base, this.props)

    return (
      <li className={newProps.className}>{newProps.logoUrl && <img className='news__img' src={newProps.logoUrl} />}
        {newProps.link
          ? <a href={this.props.link}>{this.props.children}</a>
          : this.props.children}</li>
    )
  }
}

export default ListItem


