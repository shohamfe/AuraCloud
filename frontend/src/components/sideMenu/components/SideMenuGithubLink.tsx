import MenuItem from '@/components/menuItem/MenuItem';
import { GITHUB_REPO_URL } from '@/constants';
import { GithubLogoIcon } from '@phosphor-icons/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const SideMenuGithubLink: React.FC = () => {
  const { t } = useTranslation();

  const handleOpenRepo = () => {
    window.open(GITHUB_REPO_URL, '_blank', 'noopener,noreferrer');
  };

  return <MenuItem label={t('nav.github')} icon={GithubLogoIcon} onClick={handleOpenRepo} />;
};

export default SideMenuGithubLink;
