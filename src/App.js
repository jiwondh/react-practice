import React, {Component} from 'react';
import './App.css';


class Header extends Component {
  render(){
    return (
      <header>
        건강 콘텐츠
      </header>
    );
  }
}

class Menu extends Component {

  render(){
    var list = [];
    var i = 0;
    for(i=0; i<this.props.data.length; i++){
      var data = this.props.data[i];
      list.push(<li key={data.id}><a href="#">{data.title}</a></li>);
    }

    var list2 = this.props.data.map(d => (
      <li key={d.id}>
        <a href="#" onClick={ev => {
          ev.preventDefault();
          this.props.onSelect(d.id);
        }}>
          {d.title}
        </a>
      </li>
    ));
    
    return (
      <nav>
        <ul>
          {list2}
        </ul>
      </nav>
    );
  }
}

class Subject extends Component {
  render(){
    return (
      <header>
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}

class Content extends Component {
  render(){
    return (
      <header>
        <h1>{this.props.data.title}</h1>
      </header>
    );
  }
}

class App extends Component {

  state = {
    selected_content_id : 1,
    contents:[
      {id: 1, title: "기사", icon: ""},
      {id: 2, title: "프로그램", icon: ""},
      {id: 3, title: "마음랭킹", icon: ""},
      {id: 4, title: "제품", icon: ""},
      {id: 5, title: "이벤트", icon: ""},
    ]
  }

  getSelectedContent(){
    return this.state.contents.filter(c => this.state.selected_content_id === c.id)[0];
  }

  render() {
    return (
      <div className="App">
        <Header></Header>

        <Menu onSelect={id => {
          console.log('App', id);
          this.setState({
            selected_content_id:id
          })
        }} data={this.state.contents}></Menu>

        <Subject title="인기 수면 스토리"></Subject>
        <Subject title="인기 명상 프로그램"></Subject>
        <Subject title="인기 프로그램"></Subject>

        <Content data={this.getSelectedContent()}></Content>
      </div>
    );
  }
}

export default App;
