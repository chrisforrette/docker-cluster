FROM node:9.9.0

# Create non-root user to run app with

RUN useradd --user-group --create-home --shell /bin/bash app

# Set working directory

WORKDIR /home/app

COPY package.json package-lock.json ./

RUN chown -R app:app /home/app

# Change user so that everything that's npm-installed belongs to it

USER app

# Install dependencies

RUN npm install --quiet --no-optional && npm cache clean --force

# Switch to root and copy over the rest of our code
# This is here, after the npm install, so that code changes don't trigger an un-caching
# of the npm install line

USER root
COPY index.js app ./
RUN chown -R app:app /home/app
USER app

CMD [ "npm", "start" ]
