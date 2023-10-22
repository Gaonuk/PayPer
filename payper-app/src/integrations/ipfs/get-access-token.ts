export default function getAccessToken() {
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEJjNkVFODIwODNGYTdkNUQyRjg5MTFmRTJhN2NjYTY5NDhCNjI2RDYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTc5NzYyNTA1NjgsIm5hbWUiOiJQYXBlciJ9.yEJwfrdZxDf4prlrxGDD6veLdz9gSbFSnpgMoc03Fnk'

  // In a real app, it's better to read an access token from an
  // environement variable or other configuration that's kept outside of
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
  // return process.env.WEB3STORAGE_TOKEN
}