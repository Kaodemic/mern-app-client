import Link from "next/link";

export default function NextLink({
  href,
  locale,
  content,
  children,
  className,
}) {
  return (
    <Link href={href} locale={locale}>
      <a className={className}>{content || children}</a>
    </Link>
  );
}
