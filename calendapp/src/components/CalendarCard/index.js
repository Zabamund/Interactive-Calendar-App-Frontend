import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import { connect } from 'react-redux';

import ToggleButton from '../ToggleButton';

class CalendarCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };

    handleToggle = (event, toggle) => {
        this.setState({expanded: toggle});
    };

    //custom functions
    goToEvent = (index) => {
        //require token
        this.props.routerProps.push('/events/' + index)
    }

  render() {
    return (
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
            <CardHeader
                title={this.props.title}
                subtitle={this.props.subtitle}
                avatar={this.props.avatar}
                actAsExpander={true}
                showExpandableButton={true}
            />
            <CardText>
              <Toggle
                toggled={this.state.expanded}
                onToggle={this.handleToggle}
                labelPosition="right"
                label={this.props.description}
              />
            </CardText>
            <CardMedia
                expandable={true}
                overlay={<CardTitle title={this.props.title} subtitle={this.props.subtitle} />}
            >
                <img src={this.props.avatar} alt="Avatar of the Event"/>
            </CardMedia>
            <CardTitle title={this.props.title} subtitle={this.props.subtitle} expandable={true} />
            <CardText expandable={true}>
            </CardText>
            <CardActions>
                // location of toggle button
                <ToggleButton />
                <FlatButton label="Show Participants" onClick={this.goToEvent.bind(this, this.props.index)}/>
            </CardActions>
        </Card>
    );
  }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(CalendarCard);
