define([
    'react'
], function(React) {
    return React.createClass({
       handleSubmit: function(e) {
           e.preventDefault();
           var author = this.refs.author.getDOMNode().value.trim();
           var text = this.refs.text.getDOMNode().value.trim();
           if (!text || !author) {
               return;
           }
           this.props.onCommentSubmit({author: author, text: text});
           this.refs.author.getDOMNode().value = '';
           this.refs.text.getDOMNode().value = '';
           return;
       },
       render: function() {
           return (
               <form className="commentForm" onSubmit={this.handleSubmit}>
                   Name: <input type="text" placeholder="Your name" ref="author" /><br/>
                   Comment: <input type="text" placeholder="Say something..." ref="text" /><br/>
                   <input type="submit" value="Post" />
               </form>
           );
       }
   });
});