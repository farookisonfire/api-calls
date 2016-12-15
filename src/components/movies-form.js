"use strict"
const React = require('react');

const MovieForm = React.createClass({

  render(){
    return(
      <div className="container-fluid">
        <form>
          <div className="form-group">
            <label htmlFor="movieQuery">Movie Title</label>
            <div className="field">
              <input type="text"
                name="movieQuery"
                className="form-control"
                placeholder="Movie Title"
                ref="movieQuery"
                onChange={this.props.onChange}
                value={this.props.searchValue}
                 />
            </div>
          </div>
          <input type="submit" value="Search" className="btn btndefault btn-info" onClick={this.props.onSearch}/>
        </form>
      </div>
    );
  }
});

module.exports = MovieForm;
