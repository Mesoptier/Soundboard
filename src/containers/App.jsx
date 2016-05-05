import styles from './App.scss';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import { search } from '../reducers/collection';
import Header from '../components/Header.jsx';
import Collection from '../components/Collection.jsx';

@connect(({ collection }) => ({
  items: collection.items,
  searchQuery: collection.searchQuery,
}), {
  search,
})
export default class App extends Component {

  static propTypes = {
    items: PropTypes.array,
    searchQuery: PropTypes.string,
    search: PropTypes.func,
  };

  @autobind
  handleSelect(sample) {
    console.log(sample);
  }

  @autobind
  handleSearchChange(query) {
    this.props.search(query);
  }
  
  render() {
    return (
      <div className={styles.app}>
        <Header
          searchQuery={this.props.searchQuery}
          onSearchChange={this.handleSearchChange}
        />
        <Collection
          items={this.props.items}
          onSelect={this.handleSelect}
        />
      </div>
    );
  }

}
