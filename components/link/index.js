import Link from "next/link";

export default function NextLink({ href, locale, content }) {
  return (
    <Link href={href} locale={locale}>
      <a>{content}</a>
    </Link>
  );
}
