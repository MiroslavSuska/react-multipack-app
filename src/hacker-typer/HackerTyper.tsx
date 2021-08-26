import { Component } from 'react';
import { data } from './data';
import { theme } from '../theme';
import InfoBox from './InfoBox';
import React from 'react';
import styled from 'styled-components';

type State = {
  text: string;
  cut: number;
  altKey: number;
  capsKey: number;
};

export default class HackerTyper extends Component<{}, State> {
  divRef: React.RefObject<HTMLDivElement>;

  constructor(props: {}) {
    super(props);
    this.state = {
      text: '',
      cut: 3,
      altKey: 0,
      capsKey: 0,
    };
    this.divRef = React.createRef();
  }

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({
      text: data.slice(0, this.state.cut),
    });
    this.setState(prevState => ({
      cut: prevState.cut + 4,
    }));

    this.handleBoxes(event);
  };

  handleBoxes = (event: KeyboardEvent) => {
    if (event.key === 'Alt') {
      event.preventDefault();

      if (this.state.altKey < 3) {
        this.setState(prevState => ({
          altKey: prevState.altKey + 1,
        }));
      }
    }

    if (event.key === 'CapsLock') {
      if (this.state.capsKey < 3) {
        this.setState(prevState => ({
          capsKey: prevState.capsKey + 1,
        }));
      }
    }

    if (event.key === 'Escape') {
      if (this.state.capsKey === 3) {
        this.setState({
          capsKey: 0,
        });
      }

      if (this.state.altKey === 3) {
        this.setState({
          altKey: 0,
        });
      }
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate() {
    if (this.divRef.current !== null) {
      this.divRef.current.scrollIntoView({ block: 'end' });
    }

    if (this.state.cut >= data.length) {
      this.setState({ cut: 4 });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <DivOutput ref={this.divRef}>
        {this.state.text} |
        <div>
          {this.state.altKey === 3 && <InfoBox boxText='green' />}
          {this.state.capsKey === 3 && <InfoBox boxText='red' />}
        </div>
      </DivOutput>
    );
  }
}

const DivOutput = styled.div({
  backgroundColor: 'black',
  color: theme.hackerGreenColor,
  whiteSpace: 'pre-wrap',
  textAlign: 'left',
  padding: '30px',
  minHeight: '600px',
  position: 'relative',
  '@media all and (max-width: 700px)': {
    fontSize: '0.8rem',
  },
});
