define([
    'react',
    'jsx!components/CommentBox'
], function(React, CommentBox) {
    return React.createClass({
        render: function() {
            return (
                <CommentBox url="http://localhost:8080/comment" pollInterval={2000} />
            );
        }
    });
});