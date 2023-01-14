#!/bin/bash
cp -a ./. /media/lars/Volume/Projekts/school/abi_page/src/assets/
cp -a ./*/assets/ /media/lars/Volume/Projekts/school/abi_page/src/assets/
cp -a ./*/assets/. ./assets/

pandoc --pdf-engine=xelatex -V geometry:margin=1in -o mathe/algebra.pdf mathe/algebra.md
pandoc --pdf-engine=xelatex -V geometry:margin=1in -o mathe/analysis.pdf mathe/analysis.md
pandoc --pdf-engine=xelatex -V geometry:margin=1in -o mathe/stochastik.pdf mathe/stochastik.md

pandoc --pdf-engine=xelatex -V geometry:margin=1in -o physik/wellen.pdf physik/wellen.md

cp -a ./. /media/lars/Volume/Projekts/school/abi_page/src/assets/
cp -a ./*/assets/ /media/lars/Volume/Projekts/school/abi_page/src/assets/
