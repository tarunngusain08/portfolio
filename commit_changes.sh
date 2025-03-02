#!/bin/bash

# Function to commit individual files
commit_files() {
    # Check if a custom message is provided
    if [ $# -eq 0 ]; then
        echo "Please provide a base commit message"
        echo "Usage: $0 'Your commit message'"
        exit 1
    fi

    # Base commit message
    base_message="$1"

    # Get list of changed files
    changed_files=$(git status --porcelain | grep -E '^( M|AM|MM)' | awk '{print $2}')

    # Check if there are any changed files
    if [ -z "$changed_files" ]; then
        echo "No changes to commit"
        exit 0
    fi

    # Iterate through changed files and commit each
    for file in $changed_files; do
        # Stage the file
        git add "$file"
        
        # Create a descriptive commit message
        commit_message="$base_message: Update $(basename "$file")"
        
        # Commit the file
        git commit -m "$commit_message"
        
        echo "Committed: $file with message: $commit_message"
    done

    echo "All changes committed successfully"
}

# Run the commit function with the provided message
commit_files "$@"s
git push