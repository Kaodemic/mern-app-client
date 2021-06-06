import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

export default function NextLink(props) {
  const { href, locale, children, className } = props;
  const router = useRouter();
  return (
    <Link href={href} locale={locale || router?.locale}>
      <a className={className}>{children}</a>
    </Link>
  );
}

NextLink.propTypes = {
  href: PropTypes.string.isRequired,
  locale: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),
  className: PropTypes.string,
};
