# Example Custom Backend for NetlifyCMS

***Note:*** This is a test backend library for the NetlifyCMS project proposed for backend registries into the CMS [tracked with this PR][1]

To use:

Checkout and load dependencies

To load dependencies for build

```bash
yarn
```

To build `dist/offline-backend.js`

```bash
yarn build
```

## How to register with CMS

  - Copy the `dist/offline-backend.js` script bundle file into your cms location.
  - Change the `index.html` page to use the backend as in the example below
  - Register the backend Class to the CMS as shown below
  - Change the `config.yml` backend to `backend: offline` or the name you registered

### Add script and register in your CMS page

```html
<head>
  ...
  <script type="text/javascript" src="offline-backend.js"/>
</head>
<body>
  <script type="text/javascript" src='cms.js'/>
  <script>
    CMS.registerBackend("offline", OfflineBackendClass)
  </script>
</body>
```

## Dependencies

A React Component is required for the auth page of a backend in the NetlifyCMS, so you will need to use React to create the auth page of your backend library.

This library is using some styling that was in the NetlifyCMS, but it is better practice to style the component in your backend auth so a change does not break your component. (hey, call me lazy today 😁)

***WARNING:*** This is a proof of concept at the time of the PR, there could be breaking changes to this library once/if the [final PR][1] is merged into NetlifyCMS.

Don't forget: code like you are on 🔥

The Netlify Logo is Copyright of [Netlify][2] and should not be used without their consent.

[1]: https://github.com/netlify/netlify-cms/pull/1011
[2]: https://www.netlify.com/
