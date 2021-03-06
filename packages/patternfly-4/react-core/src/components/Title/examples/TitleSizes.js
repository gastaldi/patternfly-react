import React from 'react';
import { Title } from '@patternfly/react-core';

class TitleSizes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Title headingLevel="h1" size="4xl">4xl Title</Title>
        <Title headingLevel="h2" size="3xl">3xl Title</Title>
        <Title headingLevel="h3" size="2xl">2xl Title</Title>
        <Title headingLevel="h4" size="xl">xl Title</Title>
        <Title headingLevel="h5" size="lg">lg Title</Title>
        <Title headingLevel="h6" size="md">md Title</Title>
      </React.Fragment>
    );
  }
}

export default TitleSizes;
