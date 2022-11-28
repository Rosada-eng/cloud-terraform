import os
import subprocess
import json

class Terraform:
    def __init__(self):
        os.chdir('../terraform')
        self.path = os.getcwd()

    def start(self):
        print("iniciando Terraform")
        x = subprocess.run('terraform init', capture_output=True)
        result = x.stdout.decode('utf-8')
        print(result)

        return result

    def check_if_has_state(self):
        return os.path.exists('terraform.tfstate')

    def create_new_vpc(self):
        print("Criando nova VPC")
        x = subprocess.run('terraform apply -var-file="tf_variables_template.json" -auto-approve -no-color', capture_output=True)
        result = x.stdout.decode('utf-8')
        print(result)
        return result

    def get_current_outputs(self):
        if not self.check_if_has_state():
            self.create_new_vpc()

        x = subprocess.run('terraform show -json -no-color', capture_output=True)
        content = x.stdout.decode('utf-8')
        json_c = json.loads(content)

        return json_c['values']['outputs']

    def send_apply(self, body):
        file_name = "tf_variables_remote.json"
        print("aplicando body: ", body)

        # create json with body
        with open(file_name, 'w') as f:
            print(f"Criando arquivo {file_name}")
            json.dump(body, f)

        print("Executando processo...")
        # send apply
        print(os.getcwd())
        x = subprocess.run(f'terraform apply -var-file="{file_name}" -auto-approve -no-color', capture_output=True)

        # remove json
        os.remove(file_name)
        print("Removendo arquivo terraform")

        result = x.stdout.decode('utf-8')
        print(result)
        return result