import React from 'react';

import config from '@/config';
import { DashboardItemCardProps } from '@/types';
import { Icons } from '@/utils';

import * as S from './styles';

export function DashboardItemCard({
  type,
  title,
  firstSubtitle,
  secondSubtitle,
  imageUrl,
  ...rest
}: DashboardItemCardProps) {
  return (
    <S.Wrapper {...rest}>
      <S.ImageWrapper>
        <S.Image source={{ uri: imageUrl || config.placeholderImgUrl }} />
      </S.ImageWrapper>

      <S.ContentWrapper>
        <S.Title>{title}</S.Title>

        <S.AdditionalInformationWrapper>
          <S.AdditionalInformationSection>
            {type === 'restaurants' && <S.IonicIcon name={Icons.STAR} />}
            <S.SectionTitle>{firstSubtitle}</S.SectionTitle>
          </S.AdditionalInformationSection>

          {type === 'restaurants' && (
            <S.AdditionalInformationSection>
              <S.FeatherIcon name={Icons.CLOCK} />
              <S.SectionTitle>{secondSubtitle}</S.SectionTitle>
            </S.AdditionalInformationSection>
          )}
        </S.AdditionalInformationWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
