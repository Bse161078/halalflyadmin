module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY'),
      secretAccessKey: env('AWS_SECRET_KEY'),
      region: env('AWS_REGION'),
      params: {
        Bucket: env('S3_BUCKET_NAME'),
      },
    },
  },
});
