import React, { useState } from 'react';
import { Select, Button, message } from 'antd';
import SkeletonLoader from '../../../components/Utilites/SkeletonLoader';
import useAllNews from '../../../hooks/useAllNews';
import { callApi } from '../../../utils/functions';
import { useNavigate } from 'react-router-dom';

const AddSelected = () => {
  const { allNews, isLoading } = useAllNews();
  const [selectedNewsIds, setSelectedNewsIds] = useState([]);
  const navigate = useNavigate();

  const onChange = value => {
    setSelectedNewsIds(value);
  };

  const filterOption = (input, option) =>
    option.label.toLowerCase().includes(input.toLowerCase());
  const formData = new FormData();
  selectedNewsIds.forEach((id, index) => {
    formData.append(`article_ids[${index}]`, id);
  });
  const handleSubmit = async () => {
    // console.log('Selected news IDs:', selectedNewsIds);
    const res = await callApi('Post', '/api/selected-articles', formData);
    if (res.created) {
      navigate(-1);
      message.success('News add success');
    } else message.error('Network response was not ok');
  };

  if (isLoading) {
    return <SkeletonLoader />;
  }

  const newsOptions = allNews.map(news => ({
    value: news.id,
    label: news.title,
  }));

  return (
    <div>
      <Select
        className="w-100"
        mode="multiple"
        showSearch
        placeholder="Select a news item"
        optionFilterProp="label"
        onChange={onChange}
        filterOption={filterOption}
        options={newsOptions}
      />
      <Button
        type="primary"
        onClick={handleSubmit}
        style={{ marginTop: '10px' }}
      >
        Submit
      </Button>
    </div>
  );
};

export default AddSelected;
