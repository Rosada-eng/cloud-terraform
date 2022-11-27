variable "ec2_configs" {
  type = list(object({
    name            = string
    ami             = string
    type            = string
    key_name        = string
    is_public       = bool
    security_groups = list(string)
    subnet_id       = string
  }))
}

variable "default_security_group_id" {
  type = string
}


variable "default_subnet_id" {
  type = string
}
