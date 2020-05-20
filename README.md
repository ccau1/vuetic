# Pending

## Features

- delete button also toggles updateTodo
- trashbin should be inside parent width (no absolute outside)

## Framework Structure

- auth
-- [ ] add auth userToken call to api
-- [ ] add auth refreshToken call to api
-- [ ] add get user call to api
-- [ ] add login page to web
-- [ ] add refresh token flow to web
- theme (starting from components)
-- [x] add computable theme object
-- [ ] create example using theme object in Button
-- [ ] update all components to use theme
- locale (https://kazupon.github.io/vue-i18n/installation.html#compatibility-note)
-- [ ] add basic storage of locale files and selected locale
-- [ ] add LocaleSwitcher container
-- [ ] ensure locale switch will update locales from api calls as well
- layout
-- [ ] allow define layout for each route
-- [ ] handle auth for each route (part of layout?)
-- [ ] handle responsive layout
- mobile (nativeScript)
-- [ ] add scaffold for base nativeScript vue