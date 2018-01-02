import React from 'react';
import CardList from './CardList';
import Form from './Form';


class GitHubUserApp extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            cards: [
                {
                    key:"1",
                    name: "mojombo",
                    avatarUrl: "https://avatars0.githubusercontent.com/u/1?v=4",
                    companyName: "mojombo"
                },
                {
                    key:"2",
                    name: "defunkt",
                    avatarUrl: "https://avatars0.githubusercontent.com/u/2?v=4",
                    companyName: "defunkt"
                }
            ]
        }
    }

    addNewCardEvent = (cardInfo) =>
    {
        this.setState((prevState) =>
        {
            return {
                cards: prevState.cards.concat({
                    key: cardInfo.id,
                    name: cardInfo.name,
                    avatarUrl: cardInfo.avatar_url,
                    companyName:cardInfo.login
                })
            };
        });
      
    };
    render()
    {
        return (
            <div>
                <Form onSubmitEvent={this.addNewCardEvent} />
                <CardList cards=
                    {this.state.cards}/>
            </div>
        );
    }
}
export default GitHubUserApp;