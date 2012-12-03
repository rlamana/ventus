buildname = ventus

# Set the source directory
srcdir = src/js
builddir = build

# Less compiler
#@lessc $< > $(addprefix ${builddir}, $(notdir $@))
lessfiles = $(wildcard src/css/*.less)
cssfile = ${builddir}/${buildname}.css

# Dependencies
targets = config.js


all: less debug release

debug: ${targets}
	r.js -o config.js optimize=none out=${builddir}/${buildname}.js

release: ${targets}
	r.js -o config.js out=${builddir}/${buildname}.min.js

less: $(lessfiles:.less=.css)
	@echo "LESS compiler finished."

%.css: %.less
	@echo Compiling $<
	@lessc $< >> ${cssfile}

clean:
	rm -f ${builddir}/${buildname}.js
	rm -f ${builddir}/${buildname}.min.js
	rm -f ${cssfile}

install:
	npm install requirejs
	npm install less


