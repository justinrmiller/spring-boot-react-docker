define([
    'react',
    'jquery',
    'jsx!components/CommentForm',
    'jsx!components/CommentList'
], function(React, $, CommentForm, CommentList) {
    return React.createClass({
       getInitialState: function() {
           return {data: []};
       },
       componentDidMount: function() {
           this.loadCommentsFromServer();
           setInterval(this.loadCommentsFromServer, this.props.pollInterval);
       },
       loadCommentsFromServer: function() {
           $.ajax({
               url: this.props.url,
               dataType: 'json',
               success: function(data) {
                   this.setState({data: data});
               }.bind(this),
               error: function(xhr, status, err) {
                   console.error(this.props.url, status, err.toString());
               }.bind(this)
           });
       },
       handleCommentSubmit: function(comment) {
           var comments = this.state.data;
           comments.push(comment);
           this.setState({data: comments}, function() {
               // `setState` accepts a callback. To avoid (improbable) race condition,
               // `we'll send the ajax request right after we optimistically set the new
               // `state.
               $.ajax({
                   url: this.props.url,
                   dataType: 'json',
                   type: 'POST',
                   data: JSON.stringify(comment),
                   contentType: "application/json",
                   success: function(data) {
                       this.setState({data: data});
                   }.bind(this),
                   error: function(xhr, status, err) {
                       console.error(this.props.url, status, err.toString());
                   }.bind(this)
               });
           });
       },
       render: function() {
           return (
               <div className="commentBox">
                   <h1>Comments</h1>
                   <CommentList data={this.state.data} />
                   <CommentForm onCommentSubmit={this.handleCommentSubmit} />
               </div>
           );
       }
   });
});