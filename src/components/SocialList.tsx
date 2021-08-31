import React from "react";
import Facebook from "../assets/facebook-f.svg";
import GitHub from "../assets/github-alt.svg";
import config from "../lib/config";

export default function SocialList({}) {
  return (
    <>
      <a
        title="Facebook"
        href={`https://facebook.com/${config.facebook_account}`}
        target="_blank"
        rel="noopener"
      >
        <Facebook width={24} height={24} />
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </>
  );
}
