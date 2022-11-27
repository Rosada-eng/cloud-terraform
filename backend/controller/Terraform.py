import os
import subprocess
import json

class Terraform:
    def __init__(self):
        os.chdir('../terraform')
        self.path = os.getcwd()

    def get_current_outputs(self):
        x = subprocess.run('terraform show -json -no-color', capture_output=True)
        content = x.stdout.decode('utf-8')
        json_c = json.loads(content)

        return json_c['values']['outputs']