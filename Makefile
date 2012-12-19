buildname = ventus

# Set the source directory
srcdir = src/js
builddir = build

# Less compiler
#@lessc $< > $(addprefix ${builddir}, $(notdir $@))
lessfiles = $(wildcard src/css/*.less)
handlebarfiles = $(wildcard src/tpl/*.handlebars)
cssfile = ${builddir}/${buildname}.css

# Dependencies
targets = config.js

all: less handlebars debug release

debug: ${targets}
	r.js -o config.js optimize=none out=${builddir}/${buildname}.js

release: ${targets}
	r.js -o config.js out=${builddir}/${buildname}.min.js

less: $(lessfiles:.less=.css)
	@echo "LESS compiler finished."

%.css: %.less
	@echo Compiling LESS $<
	@lessc --yui-compress $< >> ${cssfile}

handlebars: $(handlebarfiles:.handlebars=.handlebars.js)
	@echo "HANDLEBARS template compiler finished."

%.handlebars.js: %.handlebars
	@echo Compiling HANDLEBARS $<
	handlebars --amd $< > $<.js

clean:
	rm -f ${builddir}/${buildname}.js
	rm -f ${builddir}/${buildname}.min.js
	rm -f ${cssfile}

install:
	npm install requirejs
	npm install less
	npm install handlebars


