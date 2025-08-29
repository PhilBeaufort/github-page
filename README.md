# Template

Template using Vite and react and deploy to Github Page

# Deploy steps
1. Configure `package.json` and `vite.config.js` with the expected mainpage url and base.
1. On first commit, wait for the Github Action to complete. A new branch `gh-pages` will be created.
2. In repository parameters, **Pages** section select :
    - Source: Deploy from a branch
    - Branch: gh-pages - root
