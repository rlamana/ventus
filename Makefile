buildname = ventus

# Set the source directory
srcdir = js/
builddir = build/

# Less compiler
#@lessc $< > $(addprefix ${builddir}, $(notdir $@))
lessfiles = $(wildcard css/*.less)
cssfile = ${builddir}${buildname}.css

# Dependencies
targets = config.js


all: ${buildname}.js 
#${buildname}.min.js

${buildname}.js: ${targets}
	r.js -o config.js optimize=none out=${builddir}${buildname}.js

${buildname}.min.js: ${targets}
	r.js -o config.js out=${builddir}${buildname}.min.js

less: $(lessfiles:.less=.css)
	@echo "LESS compiler finished."

%.css: %.less
	@echo Compiling $<
	@lessc $< >> ${cssfile}

clean:
	rm ${builddir}${buildname}.js
	rm ${builddir}${buildname}.min.js
	rm ${cssfile}

install:
	npm install less


