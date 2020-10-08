import React from 'react';
import Card1 from './Card1';
import cardContent from '../../content/cardContent';
import { ICardSkill, ICardContent } from '../../content/types';

interface PropsCard {
  skill: string;
  type?: number;
}

export default function Card({ skill, type = 0 }: PropsCard) {
  const getKeyValue = <U extends keyof T, T extends object>(key: U) => (
    obj: T
  ) => obj[key];

  let skillData = cardContent[skill as keyof ICardContent];
  if (!skillData) return <> </>;
  let dataProperties = Object.getOwnPropertyNames(skillData);

  let title = getKeyValue<keyof ICardSkill, ICardSkill>(
    dataProperties[0] as keyof ICardSkill
  )(skillData as ICardSkill);
  let content = getKeyValue<keyof ICardSkill, ICardSkill>(
    dataProperties[1] as keyof ICardSkill
  )(skillData as ICardSkill);
  let expandedContent = getKeyValue<keyof ICardSkill, ICardSkill>(
    dataProperties[2] as keyof ICardSkill
  )(skillData as ICardSkill);
  return (
    <Card1
      title={title as string}
      content={content as string}
      expandedContent={expandedContent as string}
    />
  );
}
