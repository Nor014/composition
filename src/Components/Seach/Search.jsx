import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <input type='text' placeholder='Поиск' className={this.props.className}/>
    )
  }
}


export default Search