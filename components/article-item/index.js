import Link from "next/link";
import NextLink from "components/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./index.module.css";

export default function ArticleItem({
  avatar,
  name,
  userName,
  publishDate,
  slug,
  title,
  category,
  excerpt,
  tags,
  coverImage,
  // likeCount,
  // commentCount,
}) {
  const { locale } = useRouter();
  return (
    <article className={"p-5"}>
      <div className={"flex items-center space-x-2 mb-4"}>
        <Image
          src={avatar}
          width={40}
          height={40}
          alt={name}
          className="rounded-full"
        />
        <div className={"flex flex-col leading-snug"}>
          <Link href={`@${userName}`}>
            <a className={"text-sm font-medium"}>{name}</a>
          </Link>
          <span className={"text-xs text-gray-500"}>{publishDate}</span>
        </div>
      </div>
      <div className={"flex flex-wrap"}>
        <div className={"lg:w-auto lg:flex-1 pr-5"}>
          <NextLink href={slug} locale={locale} className={"block"}>
            <h2 className={"text-xl font-semibold mb-1"}>{title}</h2>
          </NextLink>
          <h3 className={"font-medium mb-1 text-green-700"}>{category}</h3>
          <NextLink href={slug} locale={locale} className={"block"}>
            <p className={styles.excerpt}>{excerpt}</p>
          </NextLink>
          {tags && (
            <div className={"space-x-2"}>
              {tags.split(",").map((tag) => (
                <span key={styles.tag} className={styles.tag}>
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {coverImage && (
          <NextLink href={slug} locale={locale} className={styles.coverImage}>
            <Image
              src={coverImage}
              layout="intrinsic"
              width={700}
              height={475}
              alt={title}
              className={"rounded-md"}
            />
          </NextLink>
        )}
      </div>
    </article>
  );
}
