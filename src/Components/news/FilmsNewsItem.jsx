import React from 'react';
import ListItem from '../List/ListItem'

// Создает элемент списка типа FilmsNews, со своими базовыми параметрами 
class FilmsNewsItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const base = {
      className: 'news film-news',
      logoUrl: 'https://i.pinimg.com/originals/f0/a1/66/f0a1667cd9eafcf81672ed0a3609fe2d.jpg',
    }
    return (
      <ListItem className={base.className} logoUrl={base.logoUrl} {...this.props}>{this.props.content}</ListItem>
    )
  }
}

export default FilmsNewsItem