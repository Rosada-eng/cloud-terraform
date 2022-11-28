from fastapi import FastAPI, Response, status, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from controller.Terraform import Terraform
app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/status")
async def status():
    tf = Terraform()
    try:
        data = tf.get_current_outputs()
        return data

    except Exception as err:
        print("Error", err)
        return HTTPException(status_code=500, detail="Error")

@app.post("/apply")
async def apply(body: dict):
    tf = Terraform()
    try:
        data = tf.send_apply(body)
        return data

    except Exception as err:
        print("Error", err)
        return HTTPException(status_code=500, detail="Error")