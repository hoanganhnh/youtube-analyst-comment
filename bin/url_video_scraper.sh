#!/bin/bash

# Set title (if your terminal supports it)
echo -ne "\033]0;Scraper\007"

cd pipeline/scraper

# Uncomment the following lines if you want to run specific URLs
# python live.py --url https://www.youtube.com/watch?v=TPcmrPrygDc
# python live.py --url https://www.youtube.com/watch?v=YZ0QUd-URt4

# Prompt user for URL input
read -p "Enter URL to scrape: " URL

# Run script with user input URL
python live.py --url "$URL"
