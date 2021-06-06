/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { ArticleItem, ArticleItemSmall } from '../../components/article-item';
import {
  articleItemFixtures,
  articleItemSmallFixtures,
} from '../__fixtures__/article-item.fixtures';

it('renders ArticleItem', () => {
  const tree = renderer.create(<ArticleItem {...articleItemFixtures} />);
  expect(tree.toJSON()).toMatchSnapshot();
});

it('renders ArticleItemSmall', () => {
  const tree = renderer.create(
    <ArticleItemSmall {...articleItemSmallFixtures} />
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
