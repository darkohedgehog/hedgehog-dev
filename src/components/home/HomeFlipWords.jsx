"use client"
import React from "react";
import { FlipWords } from "../ui/flip-words";
import { useTranslations } from 'next-intl';

export function HomeFlipWords() {
  const t = useTranslations('HomeFlipWords');
  const words = [`${t('title1')}`, `${t('title2')}`, `${t('title3')}`, `${t('title4')}`];

  return (
    <div className="h-[8rem] flex justify-center items-center px-4">
      <div className="text-xl lg:text-4xl md:text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-300">
      {t('description1')}
      <span className="ml-4"><FlipWords words={words} /></span> <br />
        {t('description2')}
      </div>
    </div>
  );
}
