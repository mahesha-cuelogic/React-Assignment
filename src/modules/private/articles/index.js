import React from 'react'
import { Route, withRouter } from 'react-router-dom';
import AllArticles from './containers/allArticles';
import ArticleModal from './components/articleModal';
import { Button, Divider } from 'semantic-ui-react';

const articles = (props) => {
  const handleCreateNew = () => props.history.push('/app/articles/new');
  return (
    <div>
        <Button floated="right" color="green" onClick={handleCreateNew} className="mb-20" content="Add New Articles" />
        <Divider hidden horizontal />
        <AllArticles />
        <Route path="/app/articles/:id" component={ArticleModal} />
  </div>
  )
}

export default withRouter(articles)