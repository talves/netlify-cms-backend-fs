# Example Custom Backend for NetlifyCMS

***Note:*** This is a backend library for NetlifyCMS proposed for file system testing of a CMS locally [was contingent on this PR][1]

***Note #2:*** Created to be used for development purposes of a NetlifyCMS project. Handy for testing your config files.

To use:

Checkout and load dependencies

To load dependencies for build

```bash
yarn
```

To build `dist/fs-backend.js`

```bash
yarn build
```

## How to register with CMS

  - Copy the `dist/fs-backend.js` script bundle file into your cms location.
  - Change the `index.html` page to use the backend as in the example below
  - Register the backend Class to the CMS as shown below
  - Change the `config.yml` backend to `backend: offline` or the name you registered

### Add script and register in your CMS page

```html
<head>
  ...
  <script type="text/javascript" src="fs-backend.js"/>
</head>
<body>
  <script type="text/javascript" src='cms.js'/>
  <script>
    CMS.registerBackend("file-system", FileSystemBackendClass)
  </script>
</body>
```

## Dependencies

A React Component is required for the auth page of a backend in the NetlifyCMS, so you will need to use React to create the auth page of your backend library.

This library is using some styling that was in the NetlifyCMS, but it is better practice to style the component in your backend auth so a change does not break your component. (hey, call me lazy today 😁)

***WARNING:*** This is a proof of concept at this time, there could be breaking changes to this library. I believe it can safely be used in a repository, since it is not used in production code. Ping me if you are not sure.

Don't forget: code like you are on 🔥

The Netlify Logo is Copyright of [Netlify][2] and should not be used without their consent.

[1]: https://github.com/netlify/netlify-cms/pull/1011
[2]: https://www.netlify.com/
