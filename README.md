## Generating an Access Token

1. Complete this template and run this command:

```bash
curl -X POST https://accounts.spotify.com/api/token -H "Authorization: Basic <base64 encoded clientId:clientSecret>" -d grant_type=client_credentials
```

2. Create a `src\assets\js\secrets.js` file that exports the returned token as `ACCESS_TOKEN`.

3. Update the token when it expires by repeating 1 and 2.

4. Export your user ID (which can be found in your Spotify settings) from the secrets file. Although it can be an empty string since it's only used for the saving, which currently isn't implemented.
