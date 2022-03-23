export const SUBMIT_INFO = 'SUBMIT_INFO';

export const submitInfo = (info) => {
    return {
      type: SUBMIT_INFO,
      info,
    }
}