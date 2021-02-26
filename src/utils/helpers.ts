/* eslint-disable @typescript-eslint/camelcase */
import moment from 'moment';
import first from 'lodash/first';

export const img = (path: string) => `${111111}/img/icons${path}`;

export const convertName = (name: string) =>
  (name || '')
    .split(' ')
    .map(s => s[0].toUpperCase())
    .join('');

export const isScrolledIntoView = (el: Element, parentEl?: HTMLElement | null) => {
  if (!el) {
    return false;
  }
  const rect = el.getBoundingClientRect();
  const elemBottom = rect.bottom;

  // Only completely visible elements return true:
  const isVisible = elemBottom <= (parentEl ? parentEl.getBoundingClientRect().bottom + 5 : window.innerHeight);
  // Partially visible elements return true:
  //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
};

export const convertSecondsToTime = (sec: number): string => {
  const minutes = parseInt(String(sec / 60));
  const seconds = sec % 60;

  return `${minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
};

export const scrollToBottom = (elId: string) => {
  const el = document.getElementById(elId);
  el && el.scrollTo({ behavior: 'smooth', top: el.scrollHeight });
};

export const scrollToNewMessages = () => {
  const lastMSG = first(document.querySelectorAll('.unreadMessage'));

  if (lastMSG) {
    lastMSG.scrollIntoView({ block: 'center', behavior: 'smooth' });
  } else {
    scrollToBottom('feed');
  }
};

export const strCode = (a: number[]) => a.map(t => String.fromCharCode(t)).join('');

export const cutHtml = (text?: string): string => (text || '').replace(/\<(.*?)>/g, '');

export const vh100 = () => {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  const vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export const isFeedBottom = () => {
  const feed = document.getElementById('feed');
  const val = feed && feed.scrollHeight - (feed.getBoundingClientRect().height + feed.scrollTop);
  return Number(val) < 200;
};

export const tabVisibility = () =>
  new Promise(s => {
    const d = document as any;
    let hidden = 'hidden';
    let visibilityChange = 'visibilitychange';
    if (typeof d.msHidden !== 'undefined') {
      hidden = 'msHidden';
      visibilityChange = 'msvisibilitychange';
    } else if (typeof d.webkitHidden !== 'undefined') {
      hidden = 'webkitHidden';
      visibilityChange = 'webkitvisibilitychange';
    }
  });
