import React from 'react'
import { Button, Icon, Table } from 'semantic-ui-react'

const allArticles = () => (
  <Table celled >
    <Table.Header className="center-align">
      <Table.Row >
        <Table.HeaderCell width="4">Title</Table.HeaderCell>
        <Table.HeaderCell width="4">Last Updated Date</Table.HeaderCell>
        <Table.HeaderCell width="4">Status</Table.HeaderCell>
        <Table.HeaderCell content="Actions" />
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell ><b>October NewsLetter</b></Table.Cell>
        <Table.Cell className="center-align">October 19, 2019</Table.Cell>
        <Table.Cell className="center-align">Draft</Table.Cell>
        <Table.Cell className="center-align">
          <Icon link className="edit ml-10" />
          <Icon link className="eye ml-10" />
          <Icon link className="trash" />
          </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell ><b>New Article</b></Table.Cell>
        <Table.Cell className="center-align">October 19, 2019</Table.Cell>
        <Table.Cell className="center-align">Published</Table.Cell>
        <Table.Cell className="center-align">
          <Icon link className="edit ml-10" />
          <Icon link className="eye ml-10" />
          <Icon link className="trash" />
          </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell ><b>React Hooks</b></Table.Cell>
        <Table.Cell className="center-align">October 19, 2019</Table.Cell>
        <Table.Cell className="center-align">Draft</Table.Cell>
        <Table.Cell className="center-align">
          <Icon link className="edit ml-10" />
          <Icon link className="eye ml-10" />
          <Icon link className="trash" />
          </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell ><b>John Lilki</b></Table.Cell>
        <Table.Cell className="center-align">October 19, 2019</Table.Cell>
        <Table.Cell className="center-align">Draft</Table.Cell>
        <Table.Cell className="center-align">
          <Icon link className="edit ml-10" />
          <Icon link className="eye ml-10" />
          <Icon link className="trash" />
          </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default allArticles
