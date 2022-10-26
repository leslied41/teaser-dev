import React, { FC, memo } from "react";

interface SocialMediaProps {
  className?: string;
}

const SocialMedia: FC<SocialMediaProps> = ({ className }) => {
  return (
    <section aria-label="social media group">
      <ul className="flex gap-x-2">
        <li className="text-m text-main-color uppercase">
          <a
            href="https://www.facebook.com/hereandthere.hk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            facebook
          </a>
        </li>
        <li className="text-m text-main-color uppercase">
          <a
            href="https://www.instagram.com/hereandthere.hk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            instagram
          </a>
        </li>
      </ul>
    </section>
  );
};

export default memo(SocialMedia);
