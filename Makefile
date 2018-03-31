install:
	npm install

start:
	npm run babel-node -- src/bin/brain-balance2.js

publish:
	npm publish

lint:
	npm run eslint .
