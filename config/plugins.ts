export default ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'no-reply@tidoris.com',
        defaultReplyTo: 'no-reply@tidoris.com',
      },
    },
  },
});
