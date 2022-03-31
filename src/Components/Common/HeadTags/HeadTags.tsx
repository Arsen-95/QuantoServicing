import Head from "next/head";
import React, { FC } from "react";

type TagsProps = {
  siteTitle: string;
  titleContent: string;
  descriptionContent: string;
};

export const HeadTags: FC<TagsProps> = ({
  siteTitle,
  titleContent,
  descriptionContent,
}) => {
  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="title" content={titleContent} />
      <meta name="description" content={descriptionContent} />
    </Head>
  );
};
