

var InboxComponent = React.createClass(
    {
        render: function () {
            return (
                <div>
                    {this.props.message}
                   
                </div>
            );
        }
    }
);

ReactDOM.render(
    <InboxComponent message="Inbox in react"/>,document.getElementById('divInbox')
);