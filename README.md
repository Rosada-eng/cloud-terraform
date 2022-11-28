# Cloud-Terraform (AWS)

## Instalação

### Backend:

Instale as bibliotecas python em um ambiente virtual e rode a aplicação flask

```python
# change to backend dir
cd backend

# update pip
python -m pip install --upgrade pip

# create virtual environment
python -m venv env

# install packages
pip install -r requirements.txt

uvicorn main:app --reload
```

A aplicação deverá rodar na porta 8000, se disponível.

### Terraform

Preencha o arquivo `.env.auto.tfvars.template` com as suas credenciais de AWS e renomeio-o para `.env.auto.tfvars`

### Frontend

Instale todos os pacotes e dependências

```
# altere para o diretório do frontend
cd ../front

#instale todos os pacotes
npm install

# execute no modo desenvolvedor
npm run dev
```

Ao executar o frontend em conjunto com o backend, a aplicação deve chamar uma rota (/status) que checa se existe um arquivo `terraform.tfstate`. Caso não exista, a aplicação criará uma VPC e outros recursos utilizando um template. Caso necessário, esse template pode ser personalizado, alterando algumas configurações de recursos.

Para executar qualquer alteração nos recursos, sejam de inclusão ou exclusão, basta acionar os botões da interface e, após configurar todas as ações, clicar em `APLICAR` e aguardar até que as mudanças sejam feitas pelo Terraform.
