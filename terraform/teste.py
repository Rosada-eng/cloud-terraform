import subprocess
import json

# run shell command
x = subprocess.run('terraform show -json -no-color', capture_output=True)

content = x.stdout.decode('utf-8')
# print(x.stdout.decode('utf-8'))
json_c = json.loads(content)
print(json_c)

