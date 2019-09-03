import React, { Component } from 'react';
import { Card, Nav, NavItem, NavLink, Progress, TabContent, TabPane, ListGroup, ListGroupItem, Table } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppSwitch } from '@coreui/react'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  renderHeader = () => {
    return(
      <thead className="thead-light">
        <tr>
          <th className="text-center">Name</th>
          <th className="text-center">Value</th>
        </tr>
      </thead>
    )
  }

  renderRows = () => {
    let row = []
    let array = [{
      name: 'Claims Queue',
      value: '250',
    },{
      name: 'Work in Progress',
      value: '210',
    },{
      name: 'Total Files',
      value: '78',
    },{
      name: 'Submitted Claims',
      value: '1304',
    },{
      name: 'Paid Claims',
      value: '0',
    },{
      name: 'Accepted Claims',
      value: '596',
    },{
      name: 'Failed File Load',
      value: '5',
    },{
      name: 'Rejected Claims',
      value: '44',
    },{
      name: 'Partial Paid Claims',
      value: '44',
    },]

    array.forEach(item => {
      row.push(
        <tr>
          <td className="text-center">
            <div>{item.name}</div>
          </td>
          <td>
            <div>{item.value}</div>
          </td>
        </tr>
      )
    });

    return(
      <tbody>
        {row}
      </tbody>
    )
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <NavLink className={classNames({ active: this.state.activeTab === '1' })}
          onClick={() => {
            this.toggle('1');
          }}>
        </NavLink>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ListGroup className="list-group-accent" tag={'div'}>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"></ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-warning list-group-item-divider">
                <Card>
                  <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                    {this.renderHeader()}
                    {this.renderRows()}
                  </Table>
                </Card>
              </ListGroupItem>
            </ListGroup>
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;
