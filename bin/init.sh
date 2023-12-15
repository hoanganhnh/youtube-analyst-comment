#!/bin/bash 

set -e

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)
DIR=$(dirname "$SCRIPT_DIR")

gnome-terminal --tab --title="Loader" --command="bash -c 'bash $DIR/bin/loader.sh; exec bash'"
# gnome-terminal --tab --title="Process" --command="bash -c 'bash  $DIR/bin/process.sh; exec bash'"
# gnome-terminal --tab --title="Scraper" --command="bash -c 'bash  $DIR/bin/scraper.sh; exec bash'"
# gnome-terminal --tab --title="Server" --command="bash -c 'bash  $DIR/bin/server.sh; exec bash'"
# gnome-terminal --tab --title="Client" --command="bash -c 'bash  $DIR/bin/client.sh; exec bash'"e
