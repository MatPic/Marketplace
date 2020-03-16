import React, {Component} from 'react';
import { Card, List, Popconfirm } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { withArticle } from './Article';
import { ShoppingCartOutlined } from '@ant-design/icons';


export class ArticleItem extends Component {

    render() {
        const item = this.props.item;
        
        function addToArticle () {
            this.props.article.add(this.props.article);
        }
    
        return (
            <List.Item style={{backgroundColor: '#ff0'}}>
                <Popconfirm
                    title={ item.name }
                    onConfirm={ addToArticle }
                    okText="Ajouter au panier"
                    cancelText="Retour"
                    placement="bottom"
                    icon={<ShoppingCartOutlined />}
                >
                    <Card
                        hoverable
                        cover={<img alt="example" src={item.imgUrl} />}
                    >
                        <Meta title={ item.name } description={ item.price + ' €' } />
                    </Card>
                </Popconfirm>
            </List.Item>
        );
    }
}

export default withArticle(ArticleItem);