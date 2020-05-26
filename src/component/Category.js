import React, {Component} from 'react';
import List from './List';
import TypeCategory from './TypeCategory';

class Category extends Component {

  render() {
      return (
        <div>

        {/*props = corespondent au texte dans les balises = TypeCategory et List*/ }
        <TypeCategory><h2>Catégorie n° 1</h2></TypeCategory>
          <List>Tâche unique 1</List>
          <List>Tâche unique 2</List>
          <List>Tâche unique 3</List>

        <TypeCategory><h2>Catégorie n° 2</h2></TypeCategory>
          <List>Tâche unique 1</List>
          <List>Tâche unique 2</List>
          <List>Tâche unique 3</List>

        </div>
      )
    }
  }

export default Category;
