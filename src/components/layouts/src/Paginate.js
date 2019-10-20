import React from 'react'
import { Pagination } from 'semantic-ui-react'

const Paginate = ({ pageRequestData, pageChange }) => {
  const handlePageChange = (e, res) => {
    console.log('e', e);
    console.log('res', res);
    pageChange(res.activePage);
  }
  console.log('total pages', pageRequestData.totalPages);
 return (
   <Pagination
     onPageChange={handlePageChange}
     boundaryRange={0}
     defaultActivePage={1}
     ellipsisItem={null}
     firstItem={null}
     lastItem={null}
     activePage={pageRequestData.page}
     siblingRange={1}
     totalPages={10}
   />
 )
}

export default Paginate