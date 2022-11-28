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

    def send_apply(self, body):
        # create json with body
        with open('terraform.tfvars.json', 'w') as f:
            print("Criando arquivo terraform.tfvars.json")
            json.dump(body, f)

        print("Executando processo...")
        # send apply
        print(os.getcwd())
        x = subprocess.run('terraform apply -var-file="terraform.tfvars.json" -auto-approve -no-color', capture_output=True)

        # remove json
        # os.remove('terraform.tfvars.json')
        print("Removendo arquivo terraform")

        result = x.stdout.decode('utf-8')
        print(result)
        return result