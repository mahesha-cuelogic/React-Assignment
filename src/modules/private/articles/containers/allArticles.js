import React, {useState, useEffect} from 'react'
import { Icon, Table } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom';
import { withStore } from '../../../../components/HOCs'
import dataBase from '../../../../api/dataBase';
import { WhiteLoader, Paginate } from '../../../../components/layouts';

const AllArticles = (props) => {
  const [loading, setLoader] = useState(true);
  const [AllArticles, setAllArticles] = useState({});
  const [pageRequestData, setPaginationData] = useState({});

  const openArticle = (i) => props.history.push(`/app/articles/${i}`);

  const getAllArticles = () => {
    const callBack = (res) => {
      const records = Object.values(res.val());
      setAllArticles(records);
      setPaginationData(
        {
        records: [...records].slice(0,  5 ),
        page: 1,
        perPage: 5,
        totalPages: Math.ceil(records.length/5)
        }
      );
      setLoader(false);
  }
  dataBase.getAllArticles(callBack);
  };
  const pageChange = (activePage) => {
    const pageRequestObj = pageRequestData;
    const { perPage } = pageRequestData;
    pageRequestObj.page = activePage;
    const fromIndex = (activePage - 1) ? ((activePage - 1)*perPage) : 0;
    const tillIndex = activePage*perPage;
    pageRequestObj.records = [...AllArticles].slice(fromIndex,   tillIndex );
    setPaginationData({ ...pageRequestObj });
  }
  useEffect(getAllArticles, []);

  if (loading) {
    return <WhiteLoader />
  }
  const { records } = pageRequestData;
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
    {records.map(i => (
          <Table.Row >
            <Table.Cell><b>{i.title || '-'}</b></Table.Cell>
            <Table.Cell className="center-align">{i.lastUpdatedDate || '-'}</Table.Cell>
            <Table.Cell className="center-align">{i.status || '-'}</Table.Cell>
            <Table.Cell className="center-align">
              <Icon link onClick={() => openArticle()} className="edit" />
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
