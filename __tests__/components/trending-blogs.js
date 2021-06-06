/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import TrendingBlogs from '../../components/trending-blogs';

it('renders ArticleItem', () => {
  const tree = renderer.create(
    <TrendingBlogs
      avatar={'/v1621748084728/nQ7lrJxnS.jpeg'}
      name={'Rahul'}
      userName={'rahul'}
    />
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
