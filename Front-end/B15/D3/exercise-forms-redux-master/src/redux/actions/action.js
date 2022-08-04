export const BTN_PERSONALSUBMIT = 'BTN_PERSONALSUBMIT';
export const BTN_WORKSUBMIT = 'BTN_WORKSUBMIT';

export const btnPersonal = (info) => ({
  type: BTN_PERSONALSUBMIT,
  info,
});

export const btnWork = (info) => ({
  type: BTN_WORKSUBMIT,
  info,
});
