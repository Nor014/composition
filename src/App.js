import React from 'react';
import './App.css';

import Container from './Components/Container'
import List from './Components/List/List'
import ListItem from './Components/List/ListItem'
import CyberNewsItem from './Components/news/CyberNewsItem'
import FilmsNewsItem from './Components/news/FilmsNewsItem'

import Add from './Components/Add/Add'
import Search from './Components/Seach/Search'

function App() {

  const news = [{
    type: 'films',
    content: 'Джейсон Момоа видел режиссерскую версию «Лиги справедливости» Зака Снайдера'
  },
  {
    type: 'cybersport',
    content: 'Virtus.pro вырывается в верхнюю сетку плей-офф TI9! NAVI — нет'
  },
  {
    type: 'films',
    link: '#',
    content: 'Кровавые прятки и море юмора. Почему вам стоит обратить внимание на хоррор-комедию «Я иду искать»'
  }]

  const add = {
    img: 'https://avatars.mds.yandex.net/get-mpic/1522540/img_id2530073925465738437.jpeg/9hq',
    title: 'Смартфон Samsung Galaxy A50 64GB',
    link: '#',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta ullamcorper lacinia. Morbi lacinia eu libero non feugiat. Sed velit lectus, ornare sed velit vitae, feugiat iaculis nisl.'
  }

  const bannerAdd = {
    img: 'https://pbs.twimg.com/media/DZ9fX5eX0AIW2g1.jpg',
    link: '#'
  }

  const nav = [
    { name: 'Видео', link: '#' },
    { name: 'Картинки', link: '#' },
    { name: 'Новости', link: '#' },
    { name: 'Карты', link: '#' },
    { name: 'Маркет', link: '#' },
  ]

  const category = [
    {
      title: 'Посещаемое',
      link: '#',
      items: ['Недвижимость', 'Маркет', 'Авто']
    },
    {
      title: 'Эфир',
      link: '#',
      items: ['Искусство', 'Сериалы', 'Премьеры']
    }
  ]

  return (
    <div className="App">
      <Container className={'container news_container'}>
        <List className={'list news-list'}>
          {news.map((el, index) => el.type === 'cybersport' && <CyberNewsItem key={index} {...news[index]} />
            || el.type === 'films' && <FilmsNewsItem key={index} {...news[index]} />)}
        </List>

        <Add className="add header_add" img={add.img} link={add.link}>
          <h3>{add.title}</h3>
          <p>{add.content}</p>
        </Add>
      </Container>

      <Container className={'container nav_container'}>
        <List className='list nav-list'>
          {nav.map((el, index) => <ListItem key={index} link={el.link}>{el.name}</ListItem>)}
        </List>
      </Container>

      <Container className={'container search_container'}>
        <Search className={'search'} />
      </Container>

      <Container className={'container banner_container'}>
        <Add className={'add banner_add'} img={bannerAdd.img} link={bannerAdd.link} />
      </Container>

      <Container className={'container category_container'}>
        {category.map((el, index) => <List className={'list category_list'} title={el.title} link={el.link} key={index}>
          {el.items.map((el, index) => <ListItem key={index}>{el}</ListItem>)}
        </List>)}
      </Container>
    </div>
  );
}

export default App;
