import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import NewsItem from '../NewsItem';
import './NewsList.css';

const Fade = ({ children, ...props }) => (
    <CSSTransition
      {...props}
      timeout={300}
      classNames="fade"
    >
      {children}
    </CSSTransition>
  );

class NewsList extends Component {

    renderList = (newsCollection) => {
        return newsCollection.map(news => {
            return (
                <Fade key={news.title}>
                    <NewsItem
                        source = {news.source}
                        author = {news.author}
                        title = {news.title}
                        description = {news.description}
                        url = {news.url}
                        urlToImage = {news.urlToImage}
                        publishedAt = {news.publishedAt}
                    />
                </Fade>

                )
        })
    }
    render() {
        const { newsCollection } = this.props;
        return (
            <TransitionGroup>
                {this.renderList(newsCollection)}
            </TransitionGroup>
        )
    }
}

export default NewsList;