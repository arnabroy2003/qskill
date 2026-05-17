import os

folder = r"public\college-logo"

# Get all files from folder
files = os.listdir(folder)

# Sort files alphabetically
files.sort()

print("\nFiles inside college-logo folder:\n")

for file in files:
    print(file)