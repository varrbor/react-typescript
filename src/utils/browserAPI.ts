export const getItem = (itemName: string) => window.localStorage.getItem(itemName);

export const setItem = (itemName: string, itemValue: any) => window.localStorage.setItem(itemName, itemValue);

export const removeItem = (itemName: string) => window.localStorage.removeItem(itemName);

export const fetch = (url: RequestInfo, options: RequestInit): any => window.fetch(url, options);
