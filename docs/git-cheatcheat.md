
# Git Cheatsheet

## 🦾 Basics
1. See which branch you're on
    - `git branch`
2. Make sure you're on the correct branch
    - `git checkout YOUR_BRANCH`
3. Update your branch, so it's in sync with main branch 
    - `git pull origin main`  
    - ⚠️ If conflicts occur: resolve them, then `git add .` and `git commit`  
4. Work on your feature
    - ♻️ Cycle
        - `git add .`
            - Adds all changes to the upcoming commit
        - `git commit -m "DESCRIPTION"`
            - Commits your changes locally
                - This is like a checkpoint in a game
        - `git push`  
            - Push the changes to GitHub (your branch)  
    - 💡 Pull from main regularly to avoid big conflicts:
        - `git pull origin main` (ca 1 gång/dag om teamet är aktivt)
5. When the feature is done:
    - Create a pull request (GitHub)  
    - Wait for other team members to verify  
    - Merge into the main branch (via GitHub)  
