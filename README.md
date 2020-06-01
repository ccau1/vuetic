# Setup

## Web Setup
[Web README](web/README.md)

## Framework Structure

- auth
-- [x] add auth userToken call to api
-- [ ] add auth refreshToken call to api
-- [x] add get user call to api
-- [x] add login page to web
-- [ ] add refresh token flow to web
- theme (starting from components)
-- [x] add computable theme object
-- [x] create example using theme object in Button
-- [x] update all components to use theme
- locale (https://kazupon.github.io/vue-i18n/installation.html#compatibility-note)
-- https://lokalise.com/blog/vue-i18n/?utm_source=google&utm_medium=cpc&utm_campaign=GENERIC-BLOG_DSA-Vuejs&gclid=CjwKCAjwh472BRAGEiwAvHVfGsRSSCfjqUCfQtyc0FfRofM3rNlZtTH8WftQfxaYPhn512uxO8qV0hoCsmwQAvD_BwE
-- [x] add basic vuex storage of current locale
-- [x] add LocaleSwitcher container
-- [x] ensure locale switch will update locales from api calls as well
- layout
-- [x] allow define layout for each route
-- [ ] handle responsive layout
-- [ ] allow half closed sidebar (only show icon)
- routes
-- [ ] define route sitemap (multi-layered)
-- [ ] handle auth for each route (part of layout?)
- mobile (nativeScript)
-- [ ] add scaffold for base nativeScript vue
- components
-- [ ] table
-- [ ] select (https://vue-multiselect.js.org/)
-- [x] card (Card, CardHeader, CardFooter)
-- [ ] checkbox