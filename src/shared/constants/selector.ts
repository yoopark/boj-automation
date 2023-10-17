export const SELECTOR = {
  LOGIN_USERID: 'input[name="login_user_id"]',
  LOGIN_PASSWORD: 'input[name="login_password"]',
  LOGIN_SUBMIT_BUTTON: 'button[type="submit"]',
  RECAPTCHA: '#recaptcha-token',
  PROBLEM_SUBMIT_SOURCE: '.CodeMirror-lines',
  PROBLEM_SUBMIT_BUTTON: 'button[type="submit"]',
  STATUS_TEXT: '#status-table > tbody > tr:first-child > td.result > span',
  SAMPLE_INPUT: (index: number) => `#sample-input-${index}`,
  SAMPLE_OUTPUT: (index: number) => `#sample-output-${index}`,
} as const;
