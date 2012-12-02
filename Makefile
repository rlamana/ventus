# Set the source directory
srcdir = js/
builddir = build/

# Dependencies
targets = config.js
buildname = ventus

all: ${buildname}.js 
#${buildname}.min.js

${buildname}.js: ${targets}
	r.js -o config.js optimize=none out=${builddir}${buildname}.js

${buildname}.min.js: ${targets}
	r.js -o config.js out=${builddir}${buildname}.min.js

clean:
	rm ${builddir}${buildname}.js
	rm ${builddir}${buildname}.min.js


