import React, {Component} from 'react';
import './App.css';
import PropTypes from'prop-types'

class Box extends Component {
  render() {
    return (
      <div style = {{border: '1px solid #09f', margin: 5, padding: 5}}>
        {this.props.children}
      </div>
    )
  }
}


class Article extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  }
  render() {
    const {
      title,
      author,
      date,
      children
    } = this.props; //To delete the reference this.props in each varible 
    return (
      <section>
        <h2>{title}</h2>
        {author && <p><em>Escrito por {author}</em></p>}
        <Box>{date}</Box>
        <article>
          {children}
        </article>
      </section>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
       <Article
        date = { new Date().toLocaleDateString()}
        title = 'Prop children 1'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children</p>
          <strong> Y mantiene las etiquetas y componentes que hemos añadido dentro</strong>
        </Article>

        <Article
        author = 'Carla Mendoza'
        date = { new Date().toLocaleDateString()}
        title = 'Prop children 2'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children</p>
          <strong> Y mantiene las etiquetas y componentes que hemos añadido dentro</strong>
        </Article>
      </div>
    );
  }
}

export default App;
