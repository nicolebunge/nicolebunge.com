import { Instagram14, Linkedin4, Xing4 } from '../components/Icons';

interface Icon {
  Component: any;
  id: string;
  title: string;
  url: string;
}

export const INSTAGRAM: Icon = {
  Component: Instagram14,
  id: 'instagram',
  title: 'Instagram',
  url: 'https://www.instagram.com/nici.bunge',
};

export const LINKED_IN: Icon = {
  Component: Linkedin4,
  id: 'linkedin',
  title: 'LinkedIn',
  url: 'https://www.linkedin.com/in/nicolebunge',
};

export const XING: Icon = {
  Component: Xing4,
  id: 'xing',
  title: 'XING',
  url: 'https://www.xing.com/profile/Nicole_Bunge3',
};
