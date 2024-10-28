import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { URL } from '../hooks/UseEnv';
const { Meta } = Card;
const MovieCard = ({item}) => (
  <Card
    style={{
      width: 350,
    }}
    cover={
      <img
        alt="example"
        src={`${URL}${item.poster_path}`}
        className='h-[200px] object-cover'
      />
    }
    actions={[
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      title={item.title}
      description={<p className='line-clamp-3'>{item.overview}</p>}
      />
  </Card>
);
export default MovieCard;