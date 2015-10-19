.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: server
server:
	browser-sync start --server --files='index.html,bundle/app.css,js/app.js'


.PHONY: clean
clean:
	rm -r bundle

.PHONY: build
build:
	webpack --watch -d --progress js/app.js build/app.js --module-bind "js=babel" --display-error-details --colors

.PHONY: js
js:


.PHONY: dev
dev:
	(make css & make build & make server & wait)