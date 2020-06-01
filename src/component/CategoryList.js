import React from 'react';
import SingleCategory from './SingleCategory';

const categoryList = [
    {
        title: 'Category 1',
        taskList: [
            {
                name: 'Acheter du lait',
                priority: 4
            },
            {
                name: 'Acheter des bols',
                priority: 1
            },
            {
                name: 'Acheter des céréales',
                priority: 1
            },
        ]
    },
    {
        title: 'Category 2',
        taskList: [
            {
                name: 'Acheter des oeufs',
                priority: 2
            },
            {
                name: 'Acheter de la pâte brisée',
                priority: 2
            },

        ]
    },
    {
        title: 'Category 3',
        taskList: [
            {
              name: 'Acheter des lardons',
              priority : 1
            },
            {
              name: 'Acheter du pain',
              priority : 6
            },
          ]
    },

]


class CategoryList extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    state = {
      tache: null
    }

    ajoutTache = (event) => {
      event.preventDefault();
      this.setState({
        tache:" Nouvelle tâche"
        })
    }

  render(){
      const categoryArray = categoryList.map((category, index)=>{
      return <SingleCategory title={category.title} taskList={category.taskList} tache={this.ajoutTache}/>

    })

  return (
    <div className="CategoryList">
     {categoryArray}
     <p>{this.state.tache}</p>
    </div>
  );
}
}

export default CategoryList;
