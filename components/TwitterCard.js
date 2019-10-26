import { Helmet } from "react-helmet";
import React from "react"

export default class TwitterCard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta name="twitter:card" content={this.props.summary}/>
                    <meta name="twitter:url" content={this.props.url}/>
                    <meta name="twitter:title" content={this.props.title}/>
                    <meta name="twitter:description" content={this.props.description}/>
                    <meta name="twitter:image" content={this.props.image}/>
                </Helmet>
            </React.Fragment>
        );
    }
}