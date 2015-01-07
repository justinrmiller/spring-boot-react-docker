define([
    'react',
    'showdown'
], function(React, Showdown) {
    var converter = new Showdown.converter();

    return React.createClass({
        render: function() {
            var rawMarkup = converter.makeHtml(this.props.children.toString());
            return (
                <div className="comment">
                    <h2 className="commentAuthor">
                        {this.props.author}
                    </h2>
                    <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
                </div>
            );
        }
    });
});