import React from 'react';
import NextLink from 'next/link';

type NextLinkProps = React.ComponentProps<typeof NextLink>;

type Props = NextLinkProps & {
  className?: string;
  children: React.ReactNode;
};

const isExternalHref = (href: NextLinkProps['href']) => {
  if (!href) return false;
  if (typeof href === 'string') {
    return href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
  }
  return false;
};

const Link: React.FC<Props> = ({ href, children, className, ...rest }) => {
  if (isExternalHref(href)) {
    return (
      // use a plain anchor for external links so they open in a new tab
      <a href={href as string} className={className} target="_blank" rel="noopener noreferrer" {...(rest as any)}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href as any} className={className} {...(rest as any)}>
      {children}
    </NextLink>
  );
};

export default Link;
