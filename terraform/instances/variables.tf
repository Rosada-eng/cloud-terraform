variable "ec2_configs" {
  type = list(object({
    name      = string
    ami       = string
    type      = string
    key_name  = string
    is_public = bool
  }))
}

variable "sg_id" {
  type = string
}

variable "subnet_id" {
  type = string
}

