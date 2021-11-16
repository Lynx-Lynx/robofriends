import React, { useEffect } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import ErrorBoundry from "../components/ErrorBoundry";
import "../styles/App.css";
import { setSearchField, requestRobots } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    searchfield: state.searchRobots.searchfield,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestRobots: () => dispatch(requestRobots()),
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

function App({
  searchfield,
  robots,
  onRequestRobots,
  onSearchChange,
  isPending,
}) {
  useEffect(() => {
    onRequestRobots();
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.username.toLowerCase().includes(searchfield.toLowerCase());
  });
  return isPending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <ErrorBoundry>
        <CardList robots={filteredRobots} />
      </ErrorBoundry>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
