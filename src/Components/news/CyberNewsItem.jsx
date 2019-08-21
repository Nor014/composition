import React from 'react';
import ListItem from '../List/ListItem'

// Создает элемент списка типа CyberNews, со своими базовыми параметрами 
class CyberNewsItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const base = {
      className: 'news cyber-news',
      logoUrl: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX23911230.jpg'
    }
    return (
      <ListItem className={base.className} logoUrl={base.logoUrl} {...this.props}>{this.props.content}</ListItem>
    )
  }
}

export default CyberNewsItem