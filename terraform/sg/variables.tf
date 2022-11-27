variable "vpc_id" {
  type = string
}

variable "security_groups" {
  type = list(object({
    name        = string
    description = string
    ingress = list(object({
      description = string
      from_port   = number
      to_port     = number
      protocol    = string
      cidr_blocks = list(string)
    }))
    egress = optional(list(object({
      description = string
      from_port   = number
      to_port     = number
      protocol    = string
      cidr_blocks = list(string)
    })))
  }))
}
