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
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">Name</th>
                        <th className="text-center">Value</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="text-center">
                          <div>Clamis Queue</div>
                        </td>
                        <td>
                          <div>250</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div>Work in Progerss</div>
                        </td>
                        <td>
                          <div>250</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div>Total Files</div>
                        </td>
                        <td>
                          <div>250</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div>Submiitted  Claims</div>
                        </td>
                        <td>
                          <div>250</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div>Paid Claims</div>
                        </td>
                        <td>
                          <div>250</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div>Accepted Claims</div>
                        </td>
                        <td>
                          <div>250</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div>Failed File Load</div>
                        </td>
                        <td>
                          <div>250</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div>Rejected Claims</div>
                        </td>
                        <td>
                          <div>250</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div>Partial Paid Claims</div>
                        </td>
                        <td>
                          <div>250</div>
                        </td>
                      </tr>
                    </tbody>
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
