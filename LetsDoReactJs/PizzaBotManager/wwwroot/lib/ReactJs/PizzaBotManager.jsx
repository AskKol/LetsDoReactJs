

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

var ConversationComponent = React.createClass(
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

var StoresOvensComponent = React.createClass(
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
    <InboxComponent message="Inbox in react" />, document.getElementById('divInbox')
);
ReactDOM.render(
    < ConversationComponent message="Converstaion in react" />, document.getElementById('divConversation')
);

ReactDOM.render(
    <StoresOvensComponent message="Store-Ovens in react" />, document.getElementById('divStoresOvens')
);