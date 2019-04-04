# Mcity-api

A static Vue website documenting where to find various API information for with Mcity applications.

## Tech

Mcity-api uses a number of open source projects to work properly:

* [Vue.js] - Used for our dashboard front end.
* [S3] - Storage of redirect objects
* [Cloudfront] - Hosting https versions of creation app.

## Installation
### Setup S3
Setup S3 Bucket as public (read), and enable static website hosting.
Set base object to index.html and error object as index.html

### Setup Cloundfront for HTTPS/Custom domain
Create a Cloudfront distribution
Set alternative domain names to your new domain (ex. api.um.city)
Set up an SSL certificate through ACM for this domain

### Buld frontend website and deploy to S3 root.
Copy env_sample to .env and populate the VUE_APP values

```sh
$ npm run build
```

Copy files from Dist folder to S3 bucket

Invalidate Cloud front cache

### Development

This application is maintained by Tyler Worman (tworman@umich.edu) if you'd like to contribute, please create a pull request for features/fixes on this repository.