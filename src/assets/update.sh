#!/bin/bash
cp -a ./. /media/lars/Volume/Projekts/school/abi_page/src/assets/
cp -a ./*/assets/ /media/lars/Volume/Projekts/school/abi_page/src/assets/
cp -a ./mathe/assets/. ./assets/
cp -a ./physik/assets/. ./assets/


pandoc --pdf-engine=xelatex -V geometry:margin=1in -o mathe/algebra.pdf mathe/algebra.md
pandoc --pdf-engine=xelatex -V geometry:margin=1in -o mathe/analysis.pdf mathe/analysis.md
pandoc --pdf-engine=xelatex -V geometry:margin=1in -o mathe/stochastik.pdf mathe/stochastik.md

pandoc --pdf-engine=xelatex -V geometry:margin=1in -o physik/schwingungen.pdf physik/schwingungen.md
pandoc --pdf-engine=xelatex -V geometry:margin=1in -o physik/wellen.pdf physik/wellen.md
pandoc --pdf-engine=xelatex -V geometry:margin=1in -o physik/wellenoptik.pdf physik/wellenoptik.md


cp -a ./. /media/lars/Volume/Projekts/school/abi_page/src/assets/
cp -a ./*/assets/ /media/lars/Volume/Projekts/school/abi_page/src/assets/

cd ..

cp -a ./Deutsch/assets/. ./assets/
pandoc --pdf-engine=xelatex -V geometry:margin=1in -o Deutsch/expressionismus.pdf Deutsch/expressionismus.md

cp ./Deutsch/expressionismus.odp /media/lars/Volume/Projekts/school/abi_page/src/assets/deutsch/expressionismus.odp
cp ./Deutsch/expressionismus.md /media/lars/Volume/Projekts/school/abi_page/src/assets/deutsch/expressionismus.md
cp ./Deutsch/expressionismus.pdf /media/lars/Volume/Projekts/school/abi_page/src/assets/deutsch/expressionismus.pdf
cp -a ./*/assets/ /media/lars/Volume/Projekts/school/abi_page/src/


cd /media/lars/Volume/Projekts/school/abi_page
git add .
git commit -am "updated contents"
git push
