import React from 'react'
import { Pagination } from 'semantic-ui-react'

const Paginate = ({ pageRequestData, pageChange }) => {
  const handlePageChange = (e, res) => {
    pageChange(res.activePage);
  }
 return (
   <Pagination
     onPageChange={handlePageChange}
     boundaryRange={0}
    //  defaultActivePage={1}
     ellipsisItem={null}
     firstItem={null}
     lastItem={null}
     activePage={pageRequestData.page}
     siblingRange={1}
     totalPages={pageRequestData.totalPages}
   />
 )
}

export default Paginate