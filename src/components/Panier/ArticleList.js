import React, {Component} from 'react'
import { List } from 'antd';
import ArticleItem from './ArticleItem';

export default class ArticleList extends Component {
    render() {
        return (
            <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 4,
                xl: 6,
                xxl: 8,
              }}
            dataSource={this.props.articlesData}
            renderItem={item => (
                <ArticleItem item={item}></ArticleItem>
            )}
            />
        );
    }
}