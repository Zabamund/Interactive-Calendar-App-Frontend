import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';


class EventItem extends Component {
  render() {
    console.log('this.props from inside EventItem', this.props);
    return(
      <ListItem>{this.props.primaryText}</ListItem>
    )
  }
}

export default EventItem;
