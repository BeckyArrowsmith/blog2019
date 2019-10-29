import { Helmet } from "react-helmet";
import React from "react"

export default class TwitterCard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta name="description" content="Personal blog of Becky Arrowsmith. Software Engineer, Tinkerer, Curious Human"/>
                    
                    <meta name="og:url" content={this.props.url} />
                    <meta name="og:title" content={this.props.title} />
                    <meta name="og:description" content={this.props.description} />
                    <meta name="og:image" content={this.props.image} />
                    <meta name="og:type" content="website" />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:url" contentt={"http://becky.codes/post?slug=/" + this.props.url}/>
                    <meta name="twitter:title" content={this.props.title}/>
                    <meta name="twitter:description" content={this.props.description}/>
                    <meta name="twitter:image" content={this.props.image}/>
                    <meta name="twitter:site" content="@beckycodes" />
                    <meta name="twitter:creator" content="@beckycodes" />
                </Helmet>
            </React.Fragment>
        );
    }
}