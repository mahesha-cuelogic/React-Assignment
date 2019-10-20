import React, {useState, useEffect} from 'react'
import { Icon, Table } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom';
import { withStore } from '../../../../components/HOCs'
import dataBase from '../../../../api/dataBase';
import { WhiteLoader, Paginate } from '../../../../components/layouts';

const AllArticles = (props) => {
  const [loading, setLoader] = useState(true);
  const [AllArticles, setAllArticles] = useState({});
  const [pageRequestData, setPaginationData] = useState({
    page: 1, perPage: 5, totalPages: Math.ceil(Object.keys(AllArticles).length/5)
  });

  const openArticle = (i) => props.history.push(`/app/articles/${i}`);

  const getAllArticles = () => {
    const callBack = (res) => {
      setAllArticles(res.val());
      setLoader(false);
  }
  dataBase.getAllArticles(callBack);
  };
  const pageChange = () => {

  }
  useEffect(getAllArticles, []);

  if (loading) {
    return <WhiteLoader />
  }

  return (<Table celled >
    <Table.Header className="center-align">
      <Table.Row >
        <Table.HeaderCell width="4">Title</Table.HeaderCell>
        <Table.HeaderCell width="4">Last Updated Date</Table.HeaderCell>
        <Table.HeaderCell width="4">Status</Table.HeaderCell>
        <Table.HeaderCell content="Actions" />
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {Object.keys(AllArticles).map(i => (
          <Table.Row key={i}>
            <Table.Cell><b>{AllArticles[i].title || '-'}</b></Table.Cell>
            <Table.Cell className="center-align">{AllArticles[i].lastUpdatedDate || '-'}</Table.Cell>
            <Table.Cell className="center-align">{AllArticles[i].status || '-'}</Table.Cell>
            <Table.Cell className="center-align">
              <Icon link onClick={() => openArticle(i)} className="edit" />
              <Icon className="eye" />
              <Icon className="trash" />
          </Table.Cell>
        </Table.Row>
        ))
        }
        <Table.Row>
          <Table.Cell style={{ textAlign: 'right' }} colSpan="4" >
            <Paginate pageRequestData={pageRequestData} pageChange={pageChange} />
          </Table.Cell>
          </Table.Row>
    </Table.Body>
  </Table>
)
}

export default withRouter(withStore(AllArticles, 'articleStore'))
