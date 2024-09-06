"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Logo from "../logo/Logo";
import { useTranslations } from 'next-intl';

export default function AboutSection() {
    const t = useTranslations('AboutSection');
  return (
    <div className="flex flex-col overflow-hidden mb-20">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-accent dark:text-accentDark pb-3">
              {t('title1')}<br />
              <span className="text-2xl md:text-[6rem] font-bold mt-1 leading-none">
              {t('title2')}
              </span>
            </h1>
          </>
        }
      >
       <Logo />
       <div className="flex flex-col justify-center py-4 mb-32 gap-3 mx-auto text-gray text-lg font-semibold">
        <p>
        {t('paragraph1')}
        </p>
        <p>
        {t('paragraph2')}
        </p>
        <p>
        {t('paragraph3')}
        </p>
        <p>
        {t('paragraph4')}
        </p>
        <p>
        {t('paragraph5')}
        </p>
        <p>
        {t('paragraph6')}
        </p>
        <p>
         {t('paragraph7')}
        </p>
        <p className="text-accent dark:text-accentDark mb-4">
        {t('paragraph8')}
        </p>
       </div>
      </ContainerScroll>
    </div>
  );
}
