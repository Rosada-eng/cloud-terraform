import subprocess
import json
import os
# change path to terraform folder
rel_to_terraform_dir = '../terraform'
terraform_dir = os.chdir(rel_to_terraform_dir)
print("Running commands at: ", os.getcwd())
# run shell command
x = subprocess.run('terraform show -json -no-color', capture_output=True)
content = x.stdout.decode('utf-8')
json_c = json.loads(content)

print(json_c)

