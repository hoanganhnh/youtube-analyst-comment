#!/bin/bash

# Set title (if your terminal supports it)
echo -ne "\033]0;Scraper\007"

cd pipeline/scraper

python live.py 
