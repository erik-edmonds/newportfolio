"use client"

import React from "react";
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const TransitionLink = ({children, href,...props}: TransitionLinkProps) => {
  const router = useRouter();
  const transition = async (event: React.MouseEvent<HTMLAnchorElement,HTMLElement>)=> {
    event.preventDefault();
    const body = document.querySelector('body');
    body?.classList.add('transition');
    await sleep(350);
    router.push(href);
    await sleep(500);
    body?.classList.remove('transition');
  }
  return (
    <Link
      onClick={transition}
      href={href} {...props}>{children}</Link>
  )
}
