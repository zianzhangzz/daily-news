import React from 'react';
import { Item, Image } from 'semantic-ui-react';
// source = {news.source}
// author = {news.author}
// title = {news.title}
// description = {news.description}
// url = {news.url}
// urlToImage = {news.urlToImage}
// publishedAt = {news.publishedAt}

const ItemExampleItems = ({source, author, title, description, url, urlToImage, publishedAt}) => (
  <Item.Group className='item-card'>
    <Item>
      <Image href={url} size='small' src={urlToImage} />
      <Item.Content>
        <Item.Header as='a' href={url}>{title}</Item.Header>
        <Item.Meta>{author}</Item.Meta>
        <Item.Description>
        {description}
        </Item.Description>
        {/* <Item.Extra>{publishedAt}</Item.Extra> */}
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ItemExampleItems;

