/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import ArticleItem from '../../components/article-item';
import { articleItemFixtures } from '../__fixtures__/article-item.fixtures';

it('renders ArticleItem', () => {
  const tree = renderer.create(<ArticleItem {...articleItemFixtures} />);
  expect(tree.toJSON()).toMatchSnapshot();
});
