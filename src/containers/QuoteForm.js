import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';
import {bindActionCreators} from 'redux'

class QuoteForm extends Component {

  state = {
    content: '',
    author: ''
  } 
  

  handleOnChange = event => {
    // Handle Updating Component State
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state

    event.preventDefault();
    
    this.props.addQuote(this.state)
    this.setState({ 
      content: '', 
      author: '' })

  };



  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form 
                className="form-horizontal" 
                onSubmit={this.handleOnSubmit}>
                  <div className="form-group" >

                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">

                      <textarea
                        className="form-control"
                        type="text"
                        name="content"
                        onChange={this.handleOnChange} 
                        value={this.state.content}/>
                      
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        name="author"
                         onChange={this.handleOnChange} 
                         value={this.state.author}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addQuote: addQuote
  }, dispatch)

}


export default connect(null, mapDispatchToProps)(QuoteForm);


