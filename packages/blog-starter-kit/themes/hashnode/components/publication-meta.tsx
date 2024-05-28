import Image from 'next/legacy/image';
import { resizeImage } from '../utils/image';
import { Publication } from '../generated/graphql';
import { twJoin } from 'tailwind-merge';

// TODO: this component name is confusing.
const PublicationMeta = (
  props: Pick<Publication, 'isTeam'> & {
    author: Pick<Publication['author'], 'name' | 'username' | 'followersCount' | 'profilePicture'>;
    aboutHTML?: string | null;
  },
) => {
  const { isTeam, aboutHTML, author } = props;
  const authorImageURL = resizeImage(
    author.profilePicture || 'https://cdn.hashnode.com/res/hashnode/image/upload/v1659089761812/fsOct5gl6.png',
    { w: 400, h: 400, c: 'face' },
  );

  return (
    <div className="blog-author-card mx-auto px-2 py-8 md:px-8 md:py-10">
      <div className="flex flex-col flex-wrap items-center">
        <div className="mb-3">
          <a 
              href={`https://hashnode.com/@${author.username}`}
                  className="blog-author-area-photo block h-24 w-24 overflow-hidden rounded-full md:h-28 md:w-28"
                >
                  <Image
                    alt={author.name}
                    className="block w-full"
                    width={200}
                    height={200}
                    src={authorImageURL}
                  />
          </a>
        </div>
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-col items-center leading-snug text-black dark:text-white">
            <h1 className="blog-author-area-name mb-2 w-full font-heading text-2xl font-bold md:text-3xl">
              <a href={`https://hashnode.com/@${author.username}`}>{author.name}</a>
            </h1>
            <div className="blog-follow-wrapper mb-2">
              {/* If no of followers is zero hide this p tag */}
              {author.followersCount > 0 && (
                <p className="blog-followers-count font-semibold opacity-75">
                  <span>{author.followersCount} follower{author.followersCount === 1 ? '' : 's'}</span>
                </p>
              )}
            </div>
          </div>
          {aboutHTML ? (
            <div
              className={twJoin('prose text-center dark:prose-dark', isTeam ? 'max-w-full lg:prose-xl' : '')}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: aboutHTML }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PublicationMeta;
