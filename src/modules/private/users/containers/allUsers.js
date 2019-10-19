import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import dataBase from '../../../../api/dataBase';
import { WhiteLoader } from '../../../../components/layouts';

const columnsHeaders = ['Name', 'E-mail address', 'Joined Date', 'User Type'];

const Allusers = () => {
  const [loading, setLoader] = useState(true);
  const [allUsers, setAllUsers] = useState(true);
  const getAllUsers = () => {
    const callBack = (res) => {
      setAllUsers(res.val());
      setLoader(false);
  }
  dataBase.getAllUsers(callBack);
  };
  useEffect(getAllUsers, []);
  if (loading) {
    return <WhiteLoader />
  }
  return (
    <Table compact celled definition>
      <Table.Header>
        <Table.Row>
          {columnsHeaders.map(i => (
            <Table.HeaderCell>{i}</Table.HeaderCell>
          ))
          }
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {Object.keys(allUsers).map(i => (
          <Table.Row>
            <Table.Cell>{allUsers[i].username}</Table.Cell>
            <Table.Cell>{allUsers[i].email}</Table.Cell>
            <Table.Cell>{allUsers[i].joiningDate || '-'}</Table.Cell>
            <Table.Cell>{allUsers[i].userType || '-'}</Table.Cell>
        </Table.Row>
        ))
        }
      </Table.Body>
  
    </Table>
  )
}

export default Allusers
