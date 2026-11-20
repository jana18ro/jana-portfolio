# make        -> resume.pdf (with phone, for applications) and ../public/resume.pdf (no phone, for the website)
all: resume.pdf ../public/resume.pdf

resume.pdf: resume.tex
	pdflatex -interaction=nonstopmode -halt-on-error resume.tex

../public/resume.pdf: resume.tex
	pdflatex -interaction=nonstopmode -halt-on-error -jobname=resume-public "\def\public{1}\input{resume.tex}"
	mv resume-public.pdf ../public/resume.pdf

clean:
	rm -f *.aux *.log *.out resume.pdf

.PHONY: all clean
