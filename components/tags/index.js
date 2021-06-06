import PropTypes from 'prop-types';
import NextLink from '../link';
import { toSlug } from '../../utils/utils';

export default function Tags({ tags = '' }) {
  return (
    <div className={'space-y-2'}>
      {tags.split(',').map((tag) => (
        <NextLink
          key={tag}
          href={`tags/${toSlug(tag)}`}
          className={
            'px-2 py-1 text-gray-800 text-sm bg-gray-200 rounded-md mr-2'
          }
        >
          {`#${tag}`}
        </NextLink>
      ))}
    </div>
  );
}

Tags.propTypes = {
  tags: PropTypes.string.isRequired,
};
